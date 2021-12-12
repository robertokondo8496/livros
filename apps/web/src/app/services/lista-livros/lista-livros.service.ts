import { Inject, Injectable } from '@angular/core';
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
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) { }


  public getAll(): Observable<Livro[]> {
    return this.httpClient.get<ILivro[]>(`${this.apiBaseUrl}/livross`).pipe(
      map((iLivros: ILivro[]) => {
        return iLivros.map((iLivro: ILivro) => Livro.fromJson(iLivro));
      }),
    );
  }

}
