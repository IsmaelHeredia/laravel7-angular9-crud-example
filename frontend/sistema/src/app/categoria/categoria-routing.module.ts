import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'categoria', redirectTo: 'categoria/index', pathMatch: 'full'},
  { path: 'categoria/index', component: IndexComponent },
  { path: 'categoria/:categoriaId/view', component: ViewComponent },
  { path: 'categoria/create', component: CreateComponent },
  { path: 'categoria/:categoriaId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }