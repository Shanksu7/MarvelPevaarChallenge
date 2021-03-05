import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardInformationComponent } from './mini-card-information.component';

describe('MiniCardInformationComponent', () => {
  let component: MiniCardInformationComponent;
  let fixture: ComponentFixture<MiniCardInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCardInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
