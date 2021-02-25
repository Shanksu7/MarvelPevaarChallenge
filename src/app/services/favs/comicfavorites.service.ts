import { Injectable } from '@angular/core';
import { Comic } from 'src/app/modules/comics/classes/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicfavoritesService {

  constructor() { }
  comicKey: string = 'favorite-comics';

  getList() {
    let _comics = localStorage.getItem(this.comicKey);
    if (_comics) {
      let comicsMap = new Map<number,any>(JSON.parse(_comics));
      let comics = [];
      comicsMap.forEach((val, key) => {
        comics.unshift({id: key, name: val.name, thumb: val.thumb});
      })
      return comics;
    }
    return [];
  }

  addFavorite($comic: Comic) {
    let arr = localStorage.getItem(this.comicKey);
    if (!arr) {
      let map = new Map<number, any>();
      map.set($comic.id, this.toLSObj($comic));
      localStorage.setItem(this.comicKey, JSON.stringify(Array.from(map.entries())));
    }
    else {
      let ob = new Map(JSON.parse(arr));
      ob.set($comic.id, this.toLSObj($comic));
      localStorage.setItem(this.comicKey, JSON.stringify(Array.from(ob.entries())));  
    }
  }

  deleteFavorite($comicId: number) {
    let arr = localStorage.getItem(this.comicKey);
    let ob = new Map(JSON.parse(arr));
    ob.delete($comicId);
    localStorage.setItem(this.comicKey, JSON.stringify(Array.from(ob.entries())));
  }

  private toLSObj(comic: Comic): any {
    return { name: comic.title, thumb: comic.thumbnail.path };
  }
}
