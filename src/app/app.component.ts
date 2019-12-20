import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Binding',
      icon: 'moon',
      url: '/exemple1'
    },
    {
      title: 'Event',
      icon: 'paw',
      url: '/exemple2'
    },
    {
      title: 'Exercice1 - Chrono',
      icon: 'settings',
      url: '/exercice1'
    },
    {
      title: '*ngIf',
      icon: 'planet',
      url: '/exemple3'
    },
    {
      title: '*ngFor',
      icon: 'star',
      url: '/exemple4'
    },
    {
      title: 'Binding 2 ways',
      icon: 'snow',
      url: '/exemple5'
    },
    {
      title: 'Exercice2',
      icon: 'basket',
      url: '/exercice2'
    },
    {
      title: 'Meteo',
      icon: 'help-buoy',
      url: '/exemple6'
    },
    {
      title: 'Exercice3',
      icon: 'rose',
      url: '/exercice3'
    },
    {
      title: 'Camera',
      icon: 'barcode',
      url: '/camera'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
