import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterCardInformationComponent } from './components/character-card-information/character-card-information.component';
import { CommonMarvelModule } from '../common-marvel/common-marvel.module';
import { ComicsModule } from '../comics/comics.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MatSelectModule } from '@angular/material/select';
import { MiniCardInformationComponent } from './components/mini-card-information/mini-card-information.component';
import { ModalItemInformationComponent } from './components/modal-item-information/modal-item-information.component';


@NgModule({
  declarations: [CharactersListComponent, CharacterCardInformationComponent, CharacterDetailComponent, MiniCardInformationComponent, ModalItemInformationComponent],
  imports: [
    CommonModule,
    ComicsModule,
    MatSelectModule,
    FormsModule,
    CommonMarvelModule
  ],
  exports: [CharacterCardInformationComponent]
})
export class CharactersModule { }
