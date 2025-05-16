import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item


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

}
