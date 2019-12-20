import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonRequest } from '../models/pokemons';
import { PokemonDetail } from '../models/pokemonDetailsRequest';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endPoint: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonList(url: string) {
    return this.httpClient
      .get<PokemonRequest>(url)
      .toPromise();
  }

  getPokemonDetails(url: string) {
    return this.httpClient
      .get<PokemonDetail>(url)
      .toPromise();
  }
}
