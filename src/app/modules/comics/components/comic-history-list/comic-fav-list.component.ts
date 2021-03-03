import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComicfavoritesService } from 'src/app/services/favs/comicfavorites.service';

@Component({
  selector: 'app-comic-fav-list',
  templateUrl: './comic-fav-list.component.html',
  styleUrls: ['./comic-fav-list.component.css']
})
export class ComicFavoriteListComponent implements OnInit {

  constructor(private comicFavService: ComicfavoritesService) {  }
  @Output() favDeleted = new EventEmitter<any>();
  comicKey: string = 'favorite-comics';
  comics: any;
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.comics = this.comicFavService.getList();
  }

  get(item) {  }

  onFavDelete($event) {
    this.favDeleted.emit($event.id);
    this.comics.splice($event, 1);
    this.load();
  }
}
