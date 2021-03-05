import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemInformationComponent } from './modal-item-information.component';

describe('ModalItemInformationComponent', () => {
  let component: ModalItemInformationComponent;
  let fixture: ComponentFixture<ModalItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
