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

Route::post('register', 'UserController@register')->middleware('cors');
Route::post('login', 'UserController@login')->middleware('cors');
Route::get('profile', 'UserController@getAuthenticatedUser')->middleware('cors');
Route::get('userlists', 'UserController@getAllUser')->middleware('cors');
Route::get('user/delete/{id}','UserController@userDelete')->middleware('cors');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
