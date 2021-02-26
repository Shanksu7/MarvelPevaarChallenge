import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-arrow-comic',
  templateUrl: './url-arrow-comic.component.html',
  styleUrls: ['./url-arrow-comic.component.css']
})
export class UrlArrowComicComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  imgSrc: string = '';
  color: string = 'blue';
  ngOnInit(): void {
  }

  hoverLeave()
  {
    this.imgSrc = '';
    this.color = 'blue';
    console.log(this.imgSrc);
  }
  hover(){
    this.color = 'red';
    this.imgSrc='../../../../../assets/icons/link-arrow.png';
    console.log(this.imgSrc);
  }
}
