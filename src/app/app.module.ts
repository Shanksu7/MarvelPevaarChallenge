import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './modules/characters/characters.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonMarvelModule } from './modules/common-marvel/common-marvel.module';
import { CharacterService } from './services/character.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { PagenotfoundComponent } from './modules/notfound/pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    HttpClientModule,
    CommonMarvelModule,
    NgbModule,
    PdfViewerModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
