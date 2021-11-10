import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

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
      routerLink: [ '/home' ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
