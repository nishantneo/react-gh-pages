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


Route::group(['middleware' => ['cors']], function() {
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@login');
    Route::get('profile', 'UserController@getAuthenticatedUser');
    Route::get('userlists', 'UserController@getAllUser');
    Route::get('user/delete/{id}','UserController@userDelete');
    Route::post('task/add','UserController@addTask');
    Route::get('task/edit/{id}','UserController@editTask');

    Route::get('productlists', 'ProductController@getAllProducts');
    Route::post('product/add','ProductController@addProduct');
    Route::get('product/edit/{id}','ProductController@editProduct');
    Route::get('product/delete/{id}','ProductController@productDelete');

});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
