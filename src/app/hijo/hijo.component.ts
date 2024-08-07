import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }
}
