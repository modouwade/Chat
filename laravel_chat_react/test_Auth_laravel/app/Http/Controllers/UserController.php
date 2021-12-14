<?php

//     namespace App\Http\Controllers;

//     use App\User;
//     use Illuminate\Http\Request;
//     use Illuminate\Support\Facades\Hash;
//     use Illuminate\Support\Facades\Validator;
//     use JWTAuth;
//     use Tymon\JWTAuth\Exceptions\JWTException;

//     class UserController extends Controller
//     {
//         public function authenticate(Request $request)
//         {
//             $credentials = $request->only('email', 'password');

//             try {
//                 if (! $token = JWTAuth::attempt($credentials)) {
//                     return response()->json(['error' => 'invalid_credentials'], 400);
//                 }
//             } catch (JWTException $e) {
//                 return response()->json(['error' => 'could_not_create_token'], 500);
//             }

//             return response()->json(compact('token'));
//         }

//         public function register(Request $request)
//         {
//                 $validator = Validator::make($request->all(), [
//                 'name' => 'required|string|max:255',
//                 'email' => 'required|string|email|max:255|unique:users',
//                 'password' => 'required|string|min:6|confirmed',
//             ]);

//             if($validator->fails()){
//                     return response()->json($validator->errors()->toJson(), 400);
//             }

//             $user = User::create([
//                 'name' => $request->get('name'),
//                 'email' => $request->get('email'),
//                 'password' => Hash::make($request->get('password')),
//             ]);

//             $token = JWTAuth::fromUser($user);

//             return response()->json(compact('user','token'),201);
//         }

//         public function getAuthenticatedUser()
//             {
//                     try {

//                             if (! $user = JWTAuth::parseToken()->authenticate()) {
//                                     return response()->json(['user_not_found'], 404);
//                             }

//                     } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

//                             return response()->json(['token_expired'], $e->getStatusCode());

//                     } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

//                             return response()->json(['token_invalid'], $e->getStatusCode());

//                     } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

//                             return response()->json(['token_absent'], $e->getStatusCode());

//                     }

//                     return response()->json(compact('user'));
//             }
//     }

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use JWTAuthException;
class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function login(Request $request)
    {
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'name'=>$user->name, 'email'=>$user->email]];           
        }
        else 
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
      

        return response()->json($response, 201);
    }
    public function register(Request $request)
    { 
        $payload = [
            'password'=>\Hash::make($request->password),
            'email'=>$request->email,
            'name'=>$request->name,
            'auth_token'=> ''
        ];
                  
        $user = new \App\User($payload);
        if ($user->save())
        {
            
            $token = self::getToken($request->email, $request->password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\User::where('email', $request->email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        
        return response()->json($response, 201);
    }
}