import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnChanges, OnDestroy {
  @Input() data: any;
  @Output() close = new EventEmitter<boolean>();

  pokemon: any;
  private destroy$ = new Subject<void>();


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

  constructor(private pokeServe: PokeapiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.getPokemonData();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPokemonData(): void {
    if (!this.data?.entry_number) {
      this.pokemon = null;
    }

    this.pokeServe.getPokemonDetail(this.data.entry_number)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((pokemon: any) => {
        this.pokemon = pokemon;
      });
  }

  closeModal(): void {
    this.close.emit(true);
  }
}
