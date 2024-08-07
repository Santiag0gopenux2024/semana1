import {Component, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})

export class SonComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() newItemEvent = new EventEmitter<string>();
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Componente Hijo inicializado');
  }

  ngAfterViewInit(): void {
    console.log('Componente Hijo inicializó la vista');
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo destruido');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddNewItem(item: string): void {
    const pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(item)) {
      this.newItemEvent.emit(item);
    } else {
      console.error('El valor ingresado contiene caracteres no permitidos.');
    }
  }

}
