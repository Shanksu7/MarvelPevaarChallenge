import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mini-card-information',
  templateUrl: './mini-card-information.component.html',
  styleUrls: ['./mini-card-information.component.css']
})
export class MiniCardInformationComponent implements OnInit {

  @Input() title: string;
  @Input() items: any;
  @Input() available: number;
  @Input() col: string = 'col-6'
  @Output() itemClicked = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.items);
  }

  onClick($event)
  {
    this.itemClicked.emit($event);
  }

}
