import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-arrow-comic',
  templateUrl: './url-arrow-comic.component.html',
  styleUrls: ['./url-arrow-comic.component.css']
})
export class UrlArrowComicComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  @Input() url: string;
  @Input() arrowInd: number = 0;
  @Output() clicked = new EventEmitter<any>();
  arrows: Array<string> = ['../../../../../assets/icons/link-arrow.png', '../../../../../assets/icons/link-arrow-details.png']
  imgSrc: string = '';
  color: string = 'blue';
  ngOnInit(): void {
  }

  hoverLeave()
  {
    this.imgSrc = '';
    this.color = 'blue';
  }
  hover(){
    this.color = 'red';
    this.imgSrc= this.arrows[this.arrowInd];
  }

  onClick() {
   /* if (!this.openUrl) return;
    else {
      if (this.routerNavigate) {
        this.router.navigate([this.url]);
      }
      else {
        window.open(this.url, "_blank");
      }
    }*/
    this.clicked.emit({text: this.text, url: this.url});
  }
}
