import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //function de orden inferior
    function sum(a, b) {
      return a + b;
    }

    //funcion orden superior
    function operation(fn, a, b) {
      console.log('entra');
      console.log(fn(a, b));
    }
    operation(sum, 10, 20);

    //arrow function
    operation((a, b) => a * b, 5, 5);
    operation(
      (a, b) => {
        const c = a + b;
        return c * 2;
      },
      5,
      5
    );

    //foreach
    const name = ['Javier', 'Fernando', 'Angel', 'Oscar'];
    name.forEach((a) => console.log(a));
    name.forEach((a) => console.log(a.toUpperCase()));

    //map
    const namesUpper = name.map((a) => a.toUpperCase());
    console.log(namesUpper);

    //reduce
    const number = [5, 6, 8, 3, 1, 8, 5];
    const total = number.reduce((a, b) => {
      return b + a;
    }, 0);
    console.log(total);

    //POO
    //Clases
    class Drink {
      name;
      constructor(name) {
        this.name = name;
      }

      info() {
        return 'La bebida es: ' + this.name;
      }
    }
    
    const drink = new Drink('Piña colada');
    console.log(drink.info());

    class Beer extends Drink {
      alcohol;
      constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
      }

      override info() {
        return super.info() + ' ' + this.alcohol;
      }
    }
    const corona = new Beer('Corona', 5.6);
    console.log(corona.info());
  }
}
