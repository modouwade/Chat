<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function(Request $request){
    return $request->user();
});

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');

// Route::group(['middleware' => ['jwt.verify']], function() {
//     Route::get('profile', 'UserController@getAuthenticatedUser');
//     Route::get('closed', 'DataController@closed');
// });

Route::get('tasksindex', 'TaskController@index');
Route::get('taskshow/{id}', 'TaskController@show');
Route::post('taskstore', 'TaskController@store');
Route::put('taskupdate/{id}', 'TaskController@update');
Route::delete('taskdelete/{id}', 'TaskController@delete');


Route::resource('villes', 'VilleAPIController');