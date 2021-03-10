import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtonsComponent implements OnInit {

  constructor() {
    this.current = 1;
  }
  @Input() totalResults: number = 1493;
  @Output() pageChanged = new EventEmitter<any>();
  min: number = 1;
  max: number;
  current: number;
  pages: any = [];

  ngOnInit(): void {
    this.max = Math.floor(this.totalResults/10)
    this.getPages();
  }

  getPages() {
    this.pages = [];

    if (this.current + 4 >= this.max) {
      for (let i = this.max; i >= this.max - 5; i--) {
        this.pages.unshift(i);
      }
      console.log(this.current)

    }

    else {
      let val = (this.current - 4 < this.min ? this.min : this.current - 4);
      let addRight = this.min + 4 <= this.current;
      for (let i = val; i <= (addRight ? this.current + 4 : val + 4); i++) {
        this.pages.push(i);
      }
      
      console.log(this.current)
    }
  }

  selection(x) {
    this.current = x;
    this.pageChanged.emit(this.current);
    this.getPages();
  }

  begin() {
    this.current = this.min;
    this.pageChanged.emit(this.current);
    this.getPages();
  }

  end() {
    this.current = this.max;
    this.pageChanged.emit(this.current);
    this.getPages();
  }

  prev() {
    this.current -= 1;
    this.pageChanged.emit(this.current);
    this.getPages();
  }

  next() {
    this.current += 1;
    this.pageChanged.emit(this.current);
    this.getPages();
  }
}
