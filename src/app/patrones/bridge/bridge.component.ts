import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss'],
})
export class BridgeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Estructural
     * Bridge es un patrón de diseño estructural que te permite dividir
     * una clase grande, o un grupo de clases estrechamente relacionadas,
     * en dos jerarquías separadas (abstracción e implementación) que pueden
     * desarrollarse independientemente la una de la otra.
     */

    interface ListImplementor {
      elements: number[];
      add(number: number): void;
      getElements(): number[];
    }

    class OrderList implements ListImplementor {
      elements: number[] = [];

      public add(number: number): void {
        this.elements.push(number);
        this.elements.sort();
      }

      public getElements(): number[] {
        return this.elements;
      }
    }

    class UniqueList implements ListImplementor {
      elements: number[] = [];

      public add(number: number): void {
        if (!this.elements.includes(number)) {
          this.elements.push(number);
        } else {
          console.log('El elemento ya existe');
        }
      }

      public getElements(): number[] {
        return this.elements;
      }
    }

    interface DataAbstraction {
      implementor: ListImplementor;
      add(number: number): void;
      get(): number[];
      operation(fn: (n: number) => number): number[];
    }

    class DataRefinedAbstraction implements DataAbstraction {
      implementor: ListImplementor;
      constructor(implementor: ListImplementor) {
        this.implementor = implementor;
      }
      public add(number: number): void {
        this.implementor.add(number);
      }
      public get(): number[] {
        return this.implementor.getElements();
      }
      public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
      }
    }

    const unique = new DataRefinedAbstraction (new UniqueList());
    unique.add(1);
    unique.add(3);
    unique.add(5);
    unique.add(1);
    unique.add(2);
    unique.add(3);
    console.log(unique.get());

    const order = new DataRefinedAbstraction (new OrderList());
    order.add(1);
    order.add(3);
    order.add(5);
    order.add(1);
    order.add(2);
    order.add(3);
    order.add(4);
    console.log(order.get());
  }
}
