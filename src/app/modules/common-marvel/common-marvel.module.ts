import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CharacterService } from 'src/app/services/character.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';



@NgModule({
  declarations: [FooterComponent, HeaderMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderMenuComponent]
})
export class CommonMarvelModule { }
