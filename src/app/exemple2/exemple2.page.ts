import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.page.html',
  styleUrls: ['./exemple2.page.scss'],
})
export class Exemple2Page implements OnInit {

  nombre = 0;
  isHighlighted = false;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.nombre++;
  }
  moins() {
    this.nombre--;
  }

  highlight() {
    this.isHighlighted = true;
  }

}
