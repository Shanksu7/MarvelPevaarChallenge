import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCharacterCardModalComponent } from './comic-character-card-modal.component';

describe('ComicCharacterCardModalComponent', () => {
  let component: ComicCharacterCardModalComponent;
  let fixture: ComponentFixture<ComicCharacterCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCharacterCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCharacterCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
