import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroEdicaoRoutingModule } from './livro-edicao-routing.module';
import { LivroComponent } from './components/livro/livro.component';


@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    LivroEdicaoRoutingModule
  ],
  exports: [
    LivroComponent
  ]
})
export class LivroEdicaoModule { }
