import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exemple6Page } from './exemple6.page';

const routes: Routes = [
  {
    path: '',
    component: Exemple6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exemple6PageRoutingModule {}
