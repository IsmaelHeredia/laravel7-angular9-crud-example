<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/api/categorias/leer', 'CategoriaController@index');
Route::get('/api/categorias/leer/{id}', 'CategoriaController@show');
Route::post('/api/categorias/guardar', 'CategoriaController@store');
Route::put('/api/categorias/actualizar/{id}', 'CategoriaController@update');
Route::delete('/api/categorias/borrar/{id}', 'CategoriaController@destroy');

Route::get('/api/productos/leer', 'ProductoController@index');
Route::get('/api/productos/leer/{id}', 'ProductoController@show');
Route::post('/api/productos/guardar', 'ProductoController@store');
Route::put('/api/productos/actualizar/{id}', 'ProductoController@update');
Route::delete('/api/productos/borrar/{id}', 'ProductoController@destroy');