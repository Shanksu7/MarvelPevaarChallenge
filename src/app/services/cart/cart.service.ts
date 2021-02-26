import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }

  getCart(): ComicPurchaseDetail[]{
    let _comics = localStorage.getItem(cartKey);
    if (_comics) {
      let comicsMap = new Array<ComicPurchaseDetail>(JSON.parse(_comics));
      let comics = [];
      comicsMap.forEach((val) => {
        comics.unshift(val);
      })
      return comics;
    }
    return [];
  }

  purchase($comic: ComicPurchaseDetail) {
    let arr = localStorage.getItem(cartKey);
    if (!arr) {
      let array: ComicPurchaseDetail[] = [];
      array.push($comic);
      localStorage.setItem(cartKey, JSON.stringify(array));
    }
    else {
      let ob = JSON.parse(arr);
      ob.push($comic);
      localStorage.setItem(cartKey, JSON.stringify(ob));  
    }
  }

}

export var cartKey = 'marvel-cart'
export class ComicPurchaseDetail{
  name: string;
  price: string;
  isDigital: boolean;
  purchaseDate: Date;
  imgUrl: string;
}