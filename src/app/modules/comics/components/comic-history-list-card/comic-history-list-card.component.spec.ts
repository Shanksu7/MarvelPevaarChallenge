import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicHistoryListCardComponent } from './comic-history-list-card.component';

describe('ComicHistoryListCardComponent', () => {
  let component: ComicHistoryListCardComponent;
  let fixture: ComponentFixture<ComicHistoryListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicHistoryListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicHistoryListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
