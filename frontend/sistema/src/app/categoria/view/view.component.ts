import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
  id: number;
  categoria: Categoria;
  cargado: boolean;
   
  constructor(
    public categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['categoriaId'];
      
    this.categoriaService.find(this.id).subscribe((data: Categoria)=>{
      this.categoria = data;
      this.cargado = true;
    });
  }
  
}