import { Injectable } from '@angular/core';
import { ServiceConstants, getParams } from '../constants/service-constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  params: any;
  constructor()
  {
    let x = new ServiceConstants();
    console.log(getParams());
  }

}
