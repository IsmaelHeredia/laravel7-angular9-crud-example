<?php
  
namespace App;
   
use Illuminate\Database\Eloquent\Model;
   
class Producto extends Model
{
	protected $table = 'productos';
    protected $fillable = [
        'nombre_producto', 'precio', 'categoria_id', 'descripcion', 'created_at', 'updated_at'
    ];

    public function categoria()
    {
        return $this->belongsTo('App\Categoria');
    }
}