import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  receivedName: string = '';

  onNewItemReceived(name: string): void {
    this.receivedName = name;
  }
}
