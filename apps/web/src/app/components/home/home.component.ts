import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'livros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Livros',
      icon: 'pi pi-home',
      routerLink: [ '/home/lista-livros' ],
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.router.navigate([ '/login' ]);
  }
}
