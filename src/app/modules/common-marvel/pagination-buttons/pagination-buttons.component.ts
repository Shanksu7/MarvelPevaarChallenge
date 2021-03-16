import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtonsComponent implements OnInit {

  constructor() {

  }

  get max() {
    let val = Math.floor(this.totalResults / 10);

    if (this.totalResults < 10)
      val = 1;
    else if (this.totalResults % val > 0)
      val += 1;
    return val;
  }

  @Input() totalResults: number;
  @Output() pageChanged = new EventEmitter<any>();
  min: number = 1;
  current: number = 1;
  pages: any = [];
  extraMax: number;

  ngOnInit(): void {
    this.current = 1;

    this.getPages();
  }

  getPages() {
    this.pages = [];

    if (this.current + 4 >= this.max) {
      for (let i = this.max; i >= this.max - 5; i--) {
        if (i < 1) continue;
        this.pages.unshift(i);
      }
      console.log(this.current)

    }

    else {
      let val = (this.current - 4 < this.min ? this.min : this.current - 4);
      let addRight = this.min + 4 <= this.current;
      for (let i = val; i <= (addRight ? this.current + 4 : val + 4); i++) {
        if (i < 1) continue;
        this.pages.push(i);
      }

    }

    console.log(this.current)

    return this.pages;
  }

  selection(x) {
    this.current = x;
    this.pageChanged.emit(this.current);
  }

  begin() {
    this.current = this.min;
    this.pageChanged.emit(this.current);
  }

  end() {
    this.current = this.max;
    this.pageChanged.emit(this.current);
    console.log('current');
    console.log(this.current);
  }

  prev() {
    this.current -= 1;
    this.pageChanged.emit(this.current);
    console.log('current');
    console.log(this.current);
  }

  next() {
    this.current += 1;
    this.pageChanged.emit(this.current);
  }

  resetCurrent()
  {
    this.current = 1;
    this.getPages();
  }
}
