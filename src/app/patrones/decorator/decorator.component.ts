import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss'],
})
export class DecoratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Estructural
     * Decorator es un patrón de diseño estructural que te
     * permite añadir funcionalidades a objetos colocando
     * estos objetos dentro de objetos encapsuladores especiales
     * que contienen estas funcionalidades.
     */

    interface IComponent {
      getDetail(): string;
    }

    class ProductComponent implements IComponent {
      protected name: string;
      constructor(name: string) {
        this.name = name;
      }

      public getDetail(): string {
        return `${this.name}`;
      }
    }

    abstract class ProductDecorator implements IComponent {
      protected component: IComponent;
      constructor(component: IComponent) {
        this.component = component;
      }

      public getDetail(): string {
        return this.component.getDetail();
      }
    }

    class CommercialProductDecorator extends ProductDecorator {
      private tradename: string;
      private brand: string;

      constructor(component: IComponent, trademark: string, brand: string) {
        super(component);
        this.tradename = trademark;
        this.brand = brand;
      }
      override getDetail(): string {
        return (
          this.component.getDetail() + ' ' + this.tradename + ' ' + this.brand
        );
      }
    }
    class StoreProductDecorator extends ProductDecorator {
      private price: number;

      constructor(component: IComponent, price: number) {
        super(component);
        this.price = price;
      }
      override getDetail(): string {
        return this.component.getDetail() + ' $ ' + this.price;
      }
    }

    const product = new ProductComponent('Wizard Miniature');
    console.log(product.getDetail());

    //Orden inicial
    const product2 = new CommercialProductDecorator(
      product,
      'Wizard of the Cost',
      'Wizkids'
    );
    console.log(product2.getDetail());
    const product3 = new StoreProductDecorator(product2, 125);
    console.log(product3.getDetail());

    //Orden al reves
    const producta = new StoreProductDecorator(product, 125);
    console.log(producta.getDetail());
    const productb = new CommercialProductDecorator(
      producta,
      'Wizard of the Cost',
      'Wizkids'
    );
    console.log(productb.getDetail());
  }
}
