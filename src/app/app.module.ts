import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './modules/characters/characters.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonMarvelModule } from './modules/common-marvel/common-marvel.module';
import { CharacterService } from './services/character.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    HttpClientModule,
    CommonMarvelModule,
    NgbModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
