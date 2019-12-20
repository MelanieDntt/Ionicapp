import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.page.html',
  styleUrls: ['./exercice2.page.scss'],
})
export class Exercice2Page implements OnInit {

  // : pour typer la variable
  item: string;

  tab: Article[]; /* ou Array<string>*/ 
  

  constructor(
    private alertController: AlertController,
    private storage: Storage
  ) {  }

  ngOnInit() {
    this.storage
      .get('Articles')
      .then(data => {
        this.tab = data || [];
      });
    // this.tab = [];
  }

  add() {
    this.tab.push({ name: this.item, isChecked: false });
    console.log(this.tab);
    this.item = null;
    this.save();
  }

  checked(elem: Article) {
    elem.isChecked = !elem.isChecked;
    this.save();
  }


  showAlert(elem) {
    this.alertController
      .create({
        header: "Attention,",
        subHeader: "Are you sure you want to delete " + elem.name + " ?",
        buttons: [{ 
          text: "Yes",
          handler: () => this.delete(elem)
        }, 
        { 
          text: "No" 
        }],
      })
      .then(alert => alert.present());
  }

  delete(elem: Article) {
    this.tab.splice(this.tab.indexOf(elem), 1);
    this.save();
  }

  private save() {
    this.storage.set('Articles', this.tab);
  }

}
