import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicCharacterCardModalComponent } from './components/comic-character-card-modal/comic-character-card-modal.component';
import { UrlArrowComicComponent } from './components/url-arrow-comic/url-arrow-comic.component';
import { ComicFavoriteListComponent } from './components/comic-history-list/comic-fav-list.component';
import { ComicHistoryListCardComponent } from './components/comic-history-list-card/comic-history-list-card.component';



@NgModule({
  declarations: [ComicCharacterCardModalComponent, UrlArrowComicComponent, ComicFavoriteListComponent, ComicHistoryListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ComicCharacterCardModalComponent, UrlArrowComicComponent, ComicFavoriteListComponent, ComicHistoryListCardComponent]
})
export class ComicsModule { }
