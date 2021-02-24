import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from '../../classes/comic';
import { ComicSummary } from '../../classes/comic-summary';

@Component({
  selector: 'app-comic-character-card-modal',
  templateUrl: './comic-character-card-modal.component.html',
  styleUrls: ['./comic-character-card-modal.component.css']
})
export class ComicCharacterCardModalComponent implements OnInit {

  @Input() comicData: ComicSummary;
  @Input() modal: any;
  comic: Comic;
  closeResult: string;
  isFavorite: boolean;
  comicKey: string = 'favorite-comics';
  
  constructor(private modalService: NgbModal, private comicService: ComicService) { }

  ngOnInit(): void {
    this.comicService.getComicFromUrl(this.comicData.resourceURI).subscribe(data =>    
    {
      this.comic = data.data.results[0];
      console.log(this.comic);
      let arr = new Map(JSON.parse(localStorage.getItem(this.comicKey)));
      
      console.log('localStorage');
      console.log(localStorage.getItem(this.comicKey));
      this.isFavorite = !!arr.get(this.comic.id);
    });
    
  }

  switchFavorites() {
    
    let arr = localStorage.getItem(this.comicKey);
    console.log(arr);

    if (!this.isFavorite) {
      if (!arr)
      {
        let map = new Map<number, any>();
        map.set(this.comic.id, this.toLSObj(this.comic));
        console.log("first save");
        console.log(map);
        console.log(JSON.stringify(Array.from(map.entries())));
        localStorage.setItem(this.comicKey, JSON.stringify(Array.from(map.entries())));
      }
      else {
        let ob = new Map(JSON.parse(arr));
        ob.set(this.comic.id, this.toLSObj(this.comic));
        localStorage.setItem(this.comicKey, JSON.stringify(Array.from(ob.entries())));  
      }
    }
    else {
      let ob = new Map(JSON.parse(arr));
      ob.delete(this.comic.id);
      localStorage.setItem(this.comicKey, JSON.stringify(Array.from(ob.entries())));
    }
    this.isFavorite = !this.isFavorite;
  }

  buy($price) {
    console.log($price);
  }

  toLSObj(comic: Comic) : any{
    return { name: this.comic.title, thumb: this.comic.thumbnail.path };
  }
}
