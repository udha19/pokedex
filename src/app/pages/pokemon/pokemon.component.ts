import { Component, OnDestroy, OnInit, } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit, OnDestroy {
  isDark = false
  itemPages = 10

  allPokemons: any = []
  pages = 1

  loading = true

  colors = {
    fire: "orange",
    grass: "lightgreen",
    electric: "yellow",
    water: "#70ffea",
    ground: "darkgrey",
    rock: "grey",
    fairy: "pink",
    poison: "greenyellow",
    bug: "#94ecbe",
    dragon: "orange",
    psychic: "#7c7db6",
    flying: "#fcca46",
    fighting: "darkgrey",
    normal: "lightgrey",
    ice: "#00f2f2",
    dark: "#4f7ecf",
    ghost: "#7685a7",
    steel: "steelblue",
  }

  isOpenDetail = false
  selectedData: any;

  constructor(
    private pokeServ: PokeapiService

  ){}
  ngOnInit(): void {
    this.getPokemon()
  }
  ngOnDestroy(): void {
  }

  getPokemon(){
    this.pokeServ.getRegionOne().subscribe((res: any) => {
      const pokedexes = res.pokedexes
      this.pokeServ.getPokedex(pokedexes[0].url).subscribe((poke: any) => {
        this.allPokemons = poke.pokemon_entries
        this.fetchPokemonData()

      })
    })
  }

  fetchPokemonData(): void {
    this.allPokemons.forEach((pokemon: any) => {
      this.pokeServ.getPokemonDetail(pokemon.entry_number).subscribe((data: any) => {
        pokemon['types'] = data.types;
        pokemon['height'] = data.height;
        pokemon['weight'] = data.weight;
        pokemon['color'] = this.colors[data.types[0].type.name]
        this.allPokemons = [...this.allPokemons];
        this.loading = false
      })
    });
  }

 openDetail(data){
  this.selectedData = data
  this.isOpenDetail = true
 }
  setTheme(event: any) {
    this.isDark = !this.isDark
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dracula' : 'fantasy');
  }


}
