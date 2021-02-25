import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ComicService } from 'src/app/services/comic.service';
import Swal from 'sweetalert2';
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
      let _comic = data.data.results[0];

      let arr = new Map(JSON.parse(localStorage.getItem(this.comicKey)));      
      console.log('localStorage');
      console.log(localStorage.getItem(this.comicKey));
      this.isFavorite = !!arr.get(_comic.id);
      this.comic = _comic;
      console.log(this.comic);     
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
    let image = `<img class="profile-pic" src="${this.comic.thumbnail.path}/portrait_xlarge.${this.comic.thumbnail.extension}"
    alt="${this.comicData.name}.jpg" /><br><br>`
    let address = $price.type == 'printPrice' ? 'Comic will be delivered to your address' : 'Comic will be activated for you to read in some hours'
    let html = image+ 'Do you want to pay $' + $price.price + ' for this comic?<br><br>'+ address+'<br><br>Trust me :)';

    let alertOption = {
      title: this.comic.title,
      html: html,
      cancelButtonColor:"#d33",
      showCancelButton:true,
      cancelButtonText:"I'll do it later",
      confirmButtonColor:"#3085d6",
      confirmButtonText:'Yes, give it to me!',
      showLoaderOnConfirm:true,
      focusCancel:true,
      preConfirm: () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("Doing async operation");
        Swal.fire('Now it\'s yours, just wait for it!', '', 'success');
        resolve()
      }, 3000)
    })
  },
  allowOutsideClick: () => !Swal.isLoading()
    }
    //Swal.fire(this.comic.title, html, 'info');
    Swal.fire(alertOption);
  }

  toLSObj(comic: Comic) : any{
    return { name: this.comic.title, thumb: this.comic.thumbnail.path };
  }
}
