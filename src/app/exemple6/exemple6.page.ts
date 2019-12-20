import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { WeatherData } from '../models/weather';

@Component({
  selector: 'app-exemple6',
  templateUrl: './exemple6.page.html',
  styleUrls: ['./exemple6.page.scss'],
})
export class Exemple6Page implements OnInit {

  cityName: string;

  weather: WeatherData;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
  }

  search() {
    this.weatherService.getWeather(this.cityName)
      .then(data => this.weather = data);
  }

}
