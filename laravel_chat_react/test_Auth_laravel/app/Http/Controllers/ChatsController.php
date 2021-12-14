<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChatsController extends Controller
{
    /**
     * Show chats
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Message::All();
    }

    /**
     * Fetch all messages
     *
     * @return Message
     */
    public function fetchMessages()
    {
    return Message::with('user')->get();
    }

    /**
     * Persist message to database
     *
     * @param  Request $request
     * @return Response
     */
    public function sendMessage(Request $request)
    {
    $user = JWTAuth::user();

    $message = $user->messages()->create([
        'message' => $request->input('message')
    ]);

    return ['status' => 'Message Sent!'];
    }
 
}
