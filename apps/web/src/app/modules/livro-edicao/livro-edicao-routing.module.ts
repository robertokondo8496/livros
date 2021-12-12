import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './components/livro/livro.component';

const routes: Routes = [
  {
    path: ':id',
    component: LivroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroEdicaoRoutingModule { }
