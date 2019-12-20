import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.page.html',
  styleUrls: ['./exercice1.page.scss'],
})
export class Exercice1Page implements OnInit {


  chrono = 0;
  started = false;

  timer;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.started = true;
    this.timer = setInterval(() => {
      this.chrono++;
    }, 1000);
  }

  stop() {
    this.started = false;
    clearInterval(this.timer);
  }

  reset() {
    this.chrono = 0;
  }
}
