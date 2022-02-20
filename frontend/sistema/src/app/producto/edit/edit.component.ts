import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   
  categorias: Categoria[] = [];
  id: number;
  producto: Producto;
  form: FormGroup;
  cargado: boolean;
  
  constructor(
    public categoriaService: CategoriaService,
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productoId'];

    this.categoriaService.getAll().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    });

    this.productoService.find(this.id).subscribe((data: Producto)=>{
      this.producto = data;
      this.cargado = true;
    });
    
    this.form = new FormGroup({
      nombre_producto: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      categoria_id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.productoService.update(this.id, this.form.value).subscribe(
      res => {
         console.log('Producto editado');
         this.router.navigateByUrl('producto/index');
      },
      error => {
        alert("Ocurrio un error en el proceso");
        console.log(error);
      }
    );
  }
   
}