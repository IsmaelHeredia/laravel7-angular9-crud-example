import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
  id: number;
  producto: Producto;
  cargado: boolean;
   
  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productoId'];
      
    this.productoService.find(this.id).subscribe((data: Producto)=>{
      console.log(data);
      this.producto = data;
      this.cargado = true;
    });
  }
  
}