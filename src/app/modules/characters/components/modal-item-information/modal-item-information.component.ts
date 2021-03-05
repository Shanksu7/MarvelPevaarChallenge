import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-item-information',
  templateUrl: './modal-item-information.component.html',
  styleUrls: ['./modal-item-information.component.css']
})
export class ModalItemInformationComponent implements OnInit {

  
  @Input() name;
  @Input() modal;
  @Input() path;
  @Input() extension;
  @Input() description;
  constructor() { }

  ngOnInit(): void {
  }

}
