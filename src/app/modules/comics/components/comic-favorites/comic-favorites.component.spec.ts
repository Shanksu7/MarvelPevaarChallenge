import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicFavoritesComponent } from './comic-favorites.component';

describe('ComicFavoritesComponent', () => {
  let component: ComicFavoritesComponent;
  let fixture: ComponentFixture<ComicFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
