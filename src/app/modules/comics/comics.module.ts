import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicCharacterCardModalComponent } from './components/comic-character-card-modal/comic-character-card-modal.component';
import { UrlArrowComicComponent } from './components/url-arrow-comic/url-arrow-comic.component';



@NgModule({
  declarations: [ComicCharacterCardModalComponent, UrlArrowComicComponent],
  imports: [
    CommonModule
  ],
  exports: [ComicCharacterCardModalComponent, UrlArrowComicComponent]
})
export class ComicsModule { }
