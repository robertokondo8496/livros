import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { LivroEdicaoRoutingModule } from './livro-edicao-routing.module';
import { LivroComponent } from './components/livro/livro.component';


@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    LivroEdicaoRoutingModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    LivroComponent
  ]
})
export class LivroEdicaoModule { }
