import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
})
export class ObserverComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Comportamiento
     * Observer es un patrón de diseño de comportamiento que te permite definir
     * un mecanismo de suscripción para notificar a varios objetos sobre cualquier
     * evento que le suceda al objeto que están observando.
     */

    interface IObserver<T> {
      refresh(value: T): void;
    }

    interface ISubject<T> {
      observers: IObserver<T>[];
      subscribe(observer: IObserver<T>): void;
      unsubscribe(observer: IObserver<T>): void;
      notify(observer: T): void;
    }

    class Subject<T> implements ISubject<T> {
      observers = [];
      constructor() {}

      subscribe(ob: IObserver<T>) {
        this.observers.push(ob);
      }
      unsubscribe(ob: IObserver<T>) {
        this.observers = this.observers.filter((e: any) => e !== ob);
      }
      notify(data: T) {
        this.observers.forEach((e) => {
          e.refresh(data);
        });
      }
    }

    class Observer<T> implements IObserver<T> {
      private fn: (value: T) => void;
      constructor(fn: (value: T) => void) {
        this.fn = fn;
      }
      refresh(value: T): void {
        this.fn(value);
      }
    }

    const s = new Subject<string>();
    const o1 = new Observer<string>((d) => console.log(d));
    const o2 = new Observer<string>((d) => console.log(String(d).toUpperCase()));

    s.subscribe(o1);
    s.subscribe(o2);

    s.notify('Cambio');
    s.notify('Cambio 2');
  }
}
