import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**Tipo: Creacional
     * Factory Method es un patrón de diseño creacional que proporciona una interfaz
     *  para crear objetos en una superclase, mientras permite a las subclases alterar
     * el tipo de objetos que se crearán.
     */

    interface Bread {
      bake(): void;
    }

    class Baguette implements Bread {
      bake(): void {
        console.log('Baking a baguette...');
      }
    }

    class Croissant implements Bread {
      bake(): void {
        console.log('Baking a croissant...');
      }
    }

    abstract class Bakery {
      abstract createBread(): Bread;

      bakeBread(): void {
        const bread = this.createBread();
        bread.bake();
      }
    }

    class BaguetteBakery extends Bakery {
      createBread(): Bread {
        return new Baguette();
      }
    }

    class CroissantBakery extends Bakery {
      createBread(): Bread {
        return new Croissant();
      }
    }

    function clientCode(bakery: Bakery) {
      bakery.bakeBread();
    }

    console.log('Client: I need a baguette.');
    clientCode(new BaguetteBakery());

    console.log('Client: I need a croissant.');
    clientCode(new CroissantBakery());
  }
}
