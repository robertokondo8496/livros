import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

import {
  Livro,
  ILivro,
} from '@livros/common';

@Injectable({
  providedIn: 'root'
})
export class ListaLivrosService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getAll(): Observable<Livro[]> {
    return this.httpClient.get<ILivro[]>(`http://localhost:3333/api/livros`).pipe(
      map((iLivros: ILivro[]) => {
        return iLivros.map((iLivro: ILivro) => new Livro(
          iLivro._id,
          iLivro.imagem,
          iLivro.titulo,
          iLivro.descricao,
          iLivro.url,
        ));
      }),
    );
  }

}
