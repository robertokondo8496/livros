import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaLivrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3333/api',
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
