<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index() {

        return Task::All();
    }

    public function show($id){

        return Task::find($id);
    }
    public function store(Request $request){

        return Task::create($request->All());
    }

    public function update(Request $request, $id){

        $task = Task::findOrFail($id);
        $task->update($request->All());

        return $task;
    }

    public function delete($id){
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;

    }
}
