import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicFavoriteListComponent } from './comic-fav-list.component';

describe('ComicFavoriteListComponent', () => {
  let component: ComicFavoriteListComponent;
  let fixture: ComponentFixture<ComicFavoriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicFavoriteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
