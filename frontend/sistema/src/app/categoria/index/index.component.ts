import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  categorias: Categoria[] = [];
  
  constructor(public categoriaService: CategoriaService) { }
  
  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    })  
  }
  
  deleteCategoria(id){
    if(confirm("Esta seguro ?")) {
      this.categoriaService.delete(id).subscribe(
        res => {
           this.categorias = this.categorias.filter(item => item.id !== id);
           console.log('Categoria borrada');
        },
        error => {
           alert("Ocurrio un error en el proceso");
           console.log(error);
        }
      );
    }
  }
  
}