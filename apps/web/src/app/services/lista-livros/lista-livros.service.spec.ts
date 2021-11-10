import { TestBed } from '@angular/core/testing';

import { ListaLivrosService } from './lista-livros.service';

describe('ListaLivrosService', () => {
  let service: ListaLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
