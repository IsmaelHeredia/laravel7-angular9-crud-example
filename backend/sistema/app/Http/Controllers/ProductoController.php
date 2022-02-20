<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon;
use Response;

class ProductoController extends Controller
{
    public function index(Request $request)
    {
        //$productos = Producto::all();
        $productos = DB::select("SELECT p.id, p.nombre_producto, p.precio, p.categoria_id, c.nombre AS categoria_nombre, p.descripcion, p.created_at, p.updated_at FROM productos p, categorias c WHERE p.categoria_id = c.id");

        return $productos;
    }

    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->nombre_producto = $request->nombre_producto;
        $producto->precio = $request->precio;
        $producto->categoria_id = $request->categoria_id;
        $producto->descripcion = $request->descripcion;
        $producto->created_at = Carbon\Carbon::now()->toDateTimeString();
        $producto->updated_at = Carbon\Carbon::now()->toDateTimeString();

        $producto->save();

        return Response::json(['estado' => 200, 'mensaje' => 'El producto fue creado'], 200);
    }

    public function show(Request $request)
    {
        //$producto = Producto::findOrFail($request->id);
        $producto = DB::select("SELECT p.id, p.nombre_producto, p.precio, p.categoria_id, c.nombre AS categoria_nombre, p.descripcion, p.created_at, p.updated_at FROM productos p, categorias c WHERE p.categoria_id = c.id AND p.id = :productoId", ["productoId" => $request->id]);
        return response()->json($producto[0]);
    }

    public function update(Request $request)
    {
        $producto = Producto::findOrFail($request->id);

        $producto->nombre_producto = $request->nombre_producto;
        $producto->precio = $request->precio;
        $producto->categoria_id = $request->categoria_id;
        $producto->descripcion = $request->descripcion;
        $producto->updated_at = Carbon\Carbon::now()->toDateTimeString();

        $producto->save();

        return Response::json(['estado' => 200, 'mensaje' => 'El producto fue editado'], 200);  
    }

    public function destroy(Request $request)
    {
        $producto = Producto::destroy($request->id);

        return Response::json(['estado' => 200, 'mensaje' => 'El producto fue borrado'], 200);
    }
}