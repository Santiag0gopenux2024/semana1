import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    const pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(item)) {
      this.newItemEvent.emit(item);
    } else {
      console.error('El valor ingresado contiene caracteres no permitidos.');
    }
  }

}