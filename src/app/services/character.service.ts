import { Injectable } from '@angular/core';
import { ServiceConstants, getParams, url } from '../constants/service-constants';
import { CharacterDataWrapper } from '../modules/characters/classes/character-data-wrapper';
import { HttpClient } from '@angular/common/http'
import { SearchParams } from '../modules/common-marvel/classes/search-params';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  constructor(private http: HttpClient)
  {
    let x = new ServiceConstants();
    console.log(getParams());
  }

  endpoint(t: string = '', extraParams?: SearchParams) {
    return url + 'characters' + t + getParams() + (extraParams ? extraParams.toParams() : '');
    
  }

  getPaginatedCharacters(page: number = 1){
    var url = this.endpoint('');
    console.log(url);
    return undefined;
  }

}
