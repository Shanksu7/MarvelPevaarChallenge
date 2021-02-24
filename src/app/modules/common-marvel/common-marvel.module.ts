import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CharacterService } from 'src/app/services/character.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { PdfViewModalComponent } from './components/pdf-view-modal/pdf-view-modal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Router, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './components/history/history.component';



@NgModule({
  declarations: [FooterComponent, HeaderMenuComponent, PdfViewModalComponent, CartComponent, HistoryComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderMenuComponent]
})
export class CommonMarvelModule { }
