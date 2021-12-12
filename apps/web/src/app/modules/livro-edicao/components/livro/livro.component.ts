import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Livro } from '@livros/common';

import { LivroEdicaoService } from '../../services/livro-edicao/livro-edicao.service';

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
    console.log(this.formGroup.value);
  }

}
