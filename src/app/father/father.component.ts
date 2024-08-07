import { Component, OnChanges, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})

export class FatherComponent implements OnChanges {
  receivedName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Padre ha detectado cambios', changes);
  }

  onNewItemReceived(name: string): void {
    this.receivedName = name;
  }
}
