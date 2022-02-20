import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form: FormGroup;
   
  constructor(
    public categoriaService: CategoriaService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
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
    this.categoriaService.create(this.form.value).subscribe(
      res => {
         console.log('Categoria creada');
         this.router.navigateByUrl('categoria/index');
      },
      error => {
         alert("Ocurrio un error en el proceso");
         console.log(error);
      }
    );
  }
  
}