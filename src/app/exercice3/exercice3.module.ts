import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercice3PageRoutingModule } from './exercice3-routing.module';

import { Exercice3Page } from './exercice3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercice3PageRoutingModule
  ],
  declarations: [Exercice3Page]
})
export class Exercice3PageModule {}
