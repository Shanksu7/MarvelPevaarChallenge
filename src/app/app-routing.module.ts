import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterList } from './modules/characters/classes/character-list';
import { CharacterDetailComponent } from './modules/characters/components/character-detail/character-detail.component';
import { CharactersListComponent } from './modules/characters/components/characters-list/characters-list.component';
import { ComicFavoritesComponent } from './modules/comics/components/comic-favorites/comic-favorites.component';
import { ComicFavoriteListComponent } from './modules/comics/components/comic-history-list/comic-fav-list.component';
import { CartComponent } from './modules/common-marvel/components/cart/cart.component';
import { HistoryComponent } from './modules/common-marvel/components/history/history.component';
import { PdfViewModalComponent } from './modules/common-marvel/components/pdf-view-modal/pdf-view-modal.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'list',
    component: CharactersListComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent
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
    path: 'orders',
    component: CartComponent
  },
  {
    path: 'fav-comics',
    component: ComicFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
