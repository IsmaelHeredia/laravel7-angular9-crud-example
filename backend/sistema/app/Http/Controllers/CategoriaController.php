<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;
use Carbon;
use Response;

class CategoriaController extends Controller
{
    public function index(Request $request)
    {
        $categoria = Categoria::all();
        return $categoria;
    }

    public function store(Request $request)
    {
        $categoria = new Categoria();
        $categoria->nombre = $request->nombre;
        $categoria->descripcion = $request->descripcion;
        $categoria->created_at = Carbon\Carbon::now()->toDateTimeString();
        $categoria->updated_at = Carbon\Carbon::now()->toDateTimeString();

        $categoria->save();

        return Response::json(['estado' => 200, 'mensaje' => 'La categoria fue creada'], 200);
    }

    public function show(Request $request)
    {
        $categoria = Categoria::findOrFail($request->id);
        return $categoria;
    }

    public function update(Request $request)
    {
        $categoria = Categoria::findOrFail($request->id);

        $categoria->nombre = $request->nombre;
        $categoria->descripcion = $request->descripcion;
        $categoria->updated_at = Carbon\Carbon::now()->toDateTimeString();

        $categoria->save();

        return Response::json(['estado' => 200, 'mensaje' => 'La categoria fue editada'], 200);  
    }

    public function destroy(Request $request)
    {
        $categoria = Categoria::destroy($request->id);

        return Response::json(['estado' => 200, 'mensaje' => 'La categoria fue borrada'], 200);
    }
}