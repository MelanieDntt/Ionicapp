import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  barcode: string;

  constructor(
    private scanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  scan() {
    this.scanner
      .scan()
      .then(codeBarre => this.barcode = codeBarre.text);
  }

}
