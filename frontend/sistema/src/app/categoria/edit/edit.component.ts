import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  id: number;
  categoria: Categoria;
  form: FormGroup;
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
    
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.categoriaService.update(this.id, this.form.value).subscribe(
      res => {
         console.log('Categoria editada');
         this.router.navigateByUrl('categoria/index');
      },
      error => {
         alert("Ocurrio un error en el proceso");
         console.log(error);
      }
    );
  }
   
}