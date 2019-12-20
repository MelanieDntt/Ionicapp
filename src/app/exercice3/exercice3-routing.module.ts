import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercice3Page } from './exercice3.page';

const routes: Routes = [
  {
    path: '',
    component: Exercice3Page
  },
  {
    path: 'modal-pokemon',
    loadChildren: () => import('./modal-pokemon/modal-pokemon.module').then( m => m.ModalPokemonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercice3PageRoutingModule {}
