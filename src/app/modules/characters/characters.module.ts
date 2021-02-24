import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterCardInformationComponent } from './components/character-card-information/character-card-information.component';
import { CommonMarvelModule } from '../common-marvel/common-marvel.module';


@NgModule({
  declarations: [CharactersListComponent, CharacterCardInformationComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterCardInformationComponent]
})
export class CharactersModule { }
