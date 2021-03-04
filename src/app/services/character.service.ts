import { Injectable } from '@angular/core';
import { getParams, url } from '../constants/service-constants';
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
  }

  private endpoint(t: string = '', extraParams?: SearchParams) {
    return (url + 'characters' + t + getParams() + (extraParams ? extraParams.toParams() : '')).replace('http:', 'https:');
    
  }

  getPaginatedCharacters(params?: SearchParams) : Observable<CharacterDataWrapper> {
    var url = this.endpoint('', params);
    return this.http.get<CharacterDataWrapper>(url);
  }

  getCharacter(id: number) {
    var url = this.endpoint(`/${id}`, null);
    return this.http.get<CharacterDataWrapper>(url);
  }

}
