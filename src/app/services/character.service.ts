import { Injectable } from '@angular/core';
import { ServiceConstants, getParams, url } from '../constants/service-constants';
import { CharacterDataWrapper } from '../modules/characters/classes/character-data-wrapper';
import { HttpClient } from '@angular/common/http'
import { SearchParams } from '../modules/common-marvel/classes/search-params';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  constructor(private http: HttpClient)
  {
    console.log(getParams());
  }

  endpoint(t: string = '', extraParams?: SearchParams) {
    return url + 'characters' + t + getParams() + (extraParams ? extraParams.toParams() : '');
    
  }

  getPaginatedCharacters(params?: SearchParams) : Observable<CharacterDataWrapper> {
    var url = this.endpoint('', params);
    console.log(url);
    return this.http.get<CharacterDataWrapper>(url.replace('http:', 'https:'));
  }

}
