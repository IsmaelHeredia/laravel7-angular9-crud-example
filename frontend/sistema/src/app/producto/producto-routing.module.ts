import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'producto', redirectTo: 'producto/index', pathMatch: 'full'},
  { path: 'producto/index', component: IndexComponent },
  { path: 'producto/:productoId/view', component: ViewComponent },
  { path: 'producto/create', component: CreateComponent },
  { path: 'producto/:productoId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }