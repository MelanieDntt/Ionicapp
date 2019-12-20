import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FoodDataService } from '../_services/food-data.service';
import { foodData } from '../models/food';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  barcode: string;

  model: foodData;

  constructor(
    private scanner: BarcodeScanner,
    private foodDataService: FoodDataService
  ) { }

  ngOnInit() {
  }

  scan() {
    this.scanner
      .scan()
      .then(codeBarre => {
        this.barcode = codeBarre.text;
        this.foodDataService.getFoodDataByBarcode(this.barcode)
          .then(data => this.model = data);
      })
      .catch(() => {
        this.foodDataService.getFoodDataByBarcode('5410056185784')
          .then(data => this.model = data);
      });
  }

}
