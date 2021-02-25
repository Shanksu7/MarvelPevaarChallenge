import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlArrowComicComponent } from './url-arrow-comic.component';

describe('UrlArrowComicComponent', () => {
  let component: UrlArrowComicComponent;
  let fixture: ComponentFixture<UrlArrowComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlArrowComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlArrowComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
