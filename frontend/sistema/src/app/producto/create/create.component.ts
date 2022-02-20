import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  categorias: Categoria[] = [];
  form: FormGroup;
   
  constructor(
    public categoriaService: CategoriaService,
    public productoService: ProductoService,
    private router: Router
  ) { }
  
  ngOnInit(): void {

    this.form = new FormGroup({
      nombre_producto: new FormControl('', [Validators.required]),
      precio: new FormControl('', Validators.required),
      categoria_id: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });

    this.categoriaService.getAll().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    });

  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.productoService.create(this.form.value).subscribe(
      res => {
         console.log('Producto creado');
         this.router.navigateByUrl('producto/index');
      },
      error => {
         alert("Ocurrio un error en el proceso");
         console.log(error);
      }
    );
  }
  
}