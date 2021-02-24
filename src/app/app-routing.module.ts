import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './modules/characters/components/characters-list/characters-list.component';
import { CartComponent } from './modules/common-marvel/components/cart/cart.component';
import { HistoryComponent } from './modules/common-marvel/components/history/history.component';
import { PdfViewModalComponent } from './modules/common-marvel/components/pdf-view-modal/pdf-view-modal.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'challenge',
    component: PdfViewModalComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
