import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { foodData } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getFoodDataByBarcode(barcode: string) {
    return this.httpClient
      .get<foodData>("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json")
      .toPromise();
  }
}
