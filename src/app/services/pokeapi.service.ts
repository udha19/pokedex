import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2/'
  constructor(
    private http: HttpClient
  ) { }

  getRegionOne(){
    return this.http.get(this.baseUrl+'region/1')
  }

  getPokedex(url : string){
    return this.http.get(url)
  }

  getPokemonDetail(id: number){
    return this.http.get(this.baseUrl+'pokemon/'+id)
  }
}
