import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { PokemonRequest } from '../models/pokemons';
import { ModalController } from '@ionic/angular';
import { ModalPokemonPage } from './modal-pokemon/modal-pokemon.page';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.page.html',
  styleUrls: ['./exercice3.page.scss'],
})
export class Exercice3Page implements OnInit {

  pokemonList: PokemonRequest;

  constructor(
    private pokemonService: PokemonService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList('https://pokeapi.co/api/v2/pokemon')
      .then(data => this.pokemonList = data);
  }

  goPrev() {
    this.pokemonService.getPokemonList(this.pokemonList.previous)
      .then(data => this.pokemonList = data);
  }

  goNext() {
    this.pokemonService.getPokemonList(this.pokemonList.next)
      .then(data => this.pokemonList = data);
  }

  openModal(url) {
    this.modalCtrl
      .create({
        component: ModalPokemonPage,
        componentProps: {
          url: url
        }
      })
      .then(modal => modal.present());
  }

}
