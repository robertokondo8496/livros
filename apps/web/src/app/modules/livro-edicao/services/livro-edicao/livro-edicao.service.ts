import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
  Livro,
  ILivro,
} from '@livros/common';
@Injectable({
  providedIn: 'root'
})
export class LivroEdicaoService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) { }

   public get(id: number): Observable<Livro> {
    return this.httpClient.get<ILivro>(`${this.apiBaseUrl}/livros/${id}`).pipe(
      map((iLivro: ILivro) => {
        return Livro.fromJson(iLivro);
      }),
    );
  }

  public put(iLivro: ILivro): void {
    this.httpClient.put<unknown>(
      `${this.apiBaseUrl}/Livros/${iLivro._id}`,
      iLivro,
    ).pipe(
      take(1),
    ).subscribe(results => console.log(results));
  }

}
