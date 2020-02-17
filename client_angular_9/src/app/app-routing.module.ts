import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReserListComponent } from './components/reser-list/reser-list.component';
import { ReserFormComponent } from './components/reser-form/reser-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/turistas',
    pathMatch: 'full'
  },
  {
    path: 'turistas',
    component: ReserListComponent
  },
  {
    path: 'turistas/add',
    component: ReserFormComponent
  },
  {
    path: 'turistas/edit/:id',
    component: ReserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
