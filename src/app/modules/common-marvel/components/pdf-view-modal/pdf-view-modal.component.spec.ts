import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewModalComponent } from './pdf-view-modal.component';

describe('PdfViewModalComponent', () => {
  let component: PdfViewModalComponent;
  let fixture: ComponentFixture<PdfViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
