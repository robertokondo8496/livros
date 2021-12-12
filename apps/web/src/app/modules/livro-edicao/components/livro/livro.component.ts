import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Livro, ILivro } from '@livros/common';

import { LivroEdicaoService } from '../../services/livro-edicao/livro-edicao.service';
import { ModifyResult } from 'mongodb';

@Component({
  selector: 'livros-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit, OnDestroy{
  public formGroup: FormGroup = this.formBuilder.group({
    _id: [''],
    titulo: [''],
    descricao: [''],
    imagem: [''],
    url: [''],
  });

  private subUnsubscribe: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private livroEdicaoService: LivroEdicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.subUnsubscribe),
    ).subscribe((params: Params) => {
      const livroId: number = +params.id;
      this.livroEdicaoService.get(livroId).pipe(
        take(1),
      ).subscribe((livro: Livro) => {
        this.formGroup.setValue(livro.asJson());
      });
    });
  }

  ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  public salvar(): void {
    const iLivro: ILivro = this.formGroup.value;
    this.livroEdicaoService.put(iLivro).subscribe(
      (results: ModifyResult<ILivro>) => {
        if (results.ok) {
          this.router.navigate(['/']);
        }
      },
    );
  }

}
