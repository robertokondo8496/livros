import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Livro } from '@livros/common';

import { ListaLivrosService } from '../../services/lista-livros/lista-livros.service';

@Component({
  selector: 'livros-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  public livros$: Observable<Livro[]> = this.listaLivrosService.getAll();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listaLivrosService: ListaLivrosService,
  ) { }

  ngOnInit(): void {
  }

  public editar(livro: Livro): void {
    this.router.navigate([
      '..',
      'editar-livro',
      livro.id,
    ], {
      relativeTo: this.activatedRoute,
    });
  }
}
