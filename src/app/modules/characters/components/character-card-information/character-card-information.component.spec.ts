import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInformationComponent } from './character-card-information.component';

describe('CharacterCardInformationComponent', () => {
  let component: CharacterCardInformationComponent;
  let fixture: ComponentFixture<CharacterCardInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
