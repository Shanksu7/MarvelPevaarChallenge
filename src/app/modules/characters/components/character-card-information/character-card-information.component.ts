import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getParams } from 'src/app/constants/service-constants';
import { Character } from '../../classes/character';
import Swal from 'sweetalert2'
import { ComicSummary } from 'src/app/modules/comics/classes/comic-summary';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-card-information',
  templateUrl: './character-card-information.component.html',
  styleUrls: ['./character-card-information.component.css']
})
export class CharacterCardInformationComponent implements OnInit {

  @Input() character: Character;
  @Input() favModal: any;
  comicsToShow: ComicSummary[] = [];
  closeResult: string;
  notDesc = '<no description>';
  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
    console.log(this.character);
    for (let i = 0; i < this.character.comics?.items?.length && i < 4; i++)
      this.comicsToShow.push(this.character.comics.items[i]);
  }

  goToLink(url) {
    console.log(url);
    Swal.fire(url);
    //ref here https://www.npmjs.com/package/sweetalert2
    //window.open(url, "_blank");
  }

  createComicUrl(url) {
    return url + getParams();
  }

  viewMore() {
    Swal.fire('redirect to id ' + this.character.id, '', 'info');
    console.log('view more');
  }
  comicFavAdded($comicId: number) {
    this.favModal.load();
  }
  comicFavDel($comicId: number) {
    //this.favModal.load();
  }

  open(content, comic: ComicSummary) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
