import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
import { ComicfavoritesService } from 'src/app/services/favs/comicfavorites.service';

@Component({
  selector: 'app-comic-favorites',
  templateUrl: './comic-favorites.component.html',
  styleUrls: ['./comic-favorites.component.css']
})
export class ComicFavoritesComponent implements OnInit {

  comics: any;
  constructor(private comicFavoriteService: ComicfavoritesService) { }

  ngOnInit(): void {
    this.comics = this.comicFavoriteService.getList();
  }

  onFavDelete($vent) {
    this.comics = this.comicFavoriteService.getList();
  }

}
