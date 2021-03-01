import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicfavoritesService } from 'src/app/services/favs/comicfavorites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comic-history-list-card',
  templateUrl: './comic-history-list-card.component.html',
  styleUrls: ['./comic-history-list-card.component.css']
})
export class ComicHistoryListCardComponent implements OnInit {

  @Input() comic: any;
  @Input() color: string = 'white';
  @Output() favDelete = new EventEmitter<number>();
  constructor(private comicFavService: ComicfavoritesService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.comicFavService.deleteFavorite(this.comic.id);
    this.favDelete.emit(this.comic);
    //Swal.fire('delete', this.comic.name, 'success');
  }
}
