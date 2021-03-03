import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterCardInformationComponent } from './components/character-card-information/character-card-information.component';
import { CommonMarvelModule } from '../common-marvel/common-marvel.module';
import { ComicsModule } from '../comics/comics.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [CharactersListComponent, CharacterCardInformationComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    ComicsModule,
    MatSelectModule
  ],
  exports: [CharacterCardInformationComponent]
})
export class CharactersModule { }
