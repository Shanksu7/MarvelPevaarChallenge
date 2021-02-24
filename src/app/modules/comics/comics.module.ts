import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicCharacterCardModalComponent } from './components/comic-character-card-modal/comic-character-card-modal.component';



@NgModule({
  declarations: [ComicCharacterCardModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ComicCharacterCardModalComponent]
})
export class ComicsModule { }
