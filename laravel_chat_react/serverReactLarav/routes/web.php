<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/sendfeedback', 'HomeController@sendFeedback');


Auth::routes();

Route::post('register-admin-user', [
    'as' => 'register.user',
    'uses' => 'Auth\RegisterController@create'
]);

Route::get('register', [
    'as' => 'register.form',
    'uses' => 'Auth\RegisterController@showRegisterForm'
]);

Route::get('login-form-view', [
    'as' => 'login.form',
    'uses' => 'Auth\LoginController@showLoginForm'
]);

Route::post('do-login-admin',[
    'as' => 'do.user.login',
    'uses' => 'Auth\LoginController@login'
]);

Route::get('/home', [
    'as' => 'home',
    'uses' => 'HomeController@index'
]);

Route::get('generator_builder', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@builder')->name('io_generator_builder');

Route::get('field_template', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@fieldTemplate')->name('io_field_template');

Route::get('relation_field_template', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@relationFieldTemplate')->name('io_relation_field_template');

Route::post('generator_builder/generate', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@generate')->name('io_generator_builder_generate');

Route::post('generator_builder/rollback', '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@rollback')->name('io_generator_builder_rollback');

Route::post(
    'generator_builder/generate-from-file',
    '\InfyOm\GeneratorBuilder\Controllers\GeneratorBuilderController@generateFromFile'
)->name('io_generator_builder_generate_from_file');

Route::resource('villes', 'VilleController');