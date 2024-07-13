import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss'],
})
export class StrategyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Comportamiento
     * Strategy es un patrón de diseño de comportamiento que te permite
     * definir una familia de algoritmos, colocar cada uno de ellos en
     * una clase separada y hacer sus objetos intercambiables.
     */

 
    
    class SaleContext {
      strategy: any;
      constructor(strategy: any) {
        this.strategy = strategy;
      }
      calculate(amount: number) {
        return this.strategy.calculate(amount);
      }
    }

    class RegularSaleStrategy {
      tax: number = 0;
      constructor(tax: number) {
        this.tax = tax;
      }
      calculate(amount: number) {
        return amount + amount * this.tax;
      }
    }

    class DiscountSaleStrategy {
      tax: number = 0;
      discount: number = 0;
      constructor(tax: number, discount: number) {
        this.tax = tax;
        this.discount = discount;
      }
      calculate(amount: number) {
        return amount + amount * this.tax - this.discount;
      }
    }

    const regularSale = new RegularSaleStrategy(0.16);
    const discountSale = new DiscountSaleStrategy(0.1, 25);

    const sale = new SaleContext(regularSale);
    console.log(sale.calculate(100));
    
    const salediscounted = new SaleContext(discountSale);
    console.log(salediscounted.calculate(100));


    //Ejercicio 2
    interface Strategy{

      login(user:string, password:string):boolean;
    }

    class LoginContext {

      private strategy:Strategy;

      constructor( strategy: Strategy){
        this.strategy = strategy;
      }

      setStrategy(strategy:Strategy){
        this.strategy = strategy;
      }

      login(user:string, password:string):boolean{
        return this.strategy.login(user,password);
      }

    }

    class LoginDBStrategy implements Strategy {

      login(user: string, password: string): boolean {
        return (user == "admin" && password =="admin")
      }
    }

    class LoginServiceStrategy implements Strategy {

      login(user: string, password: string): boolean {
        console.log("Nos dirigimos a un servicio");
        return (user == "admin" && password =="admin")
      }
    }

    const auth = new LoginContext(new LoginDBStrategy())
    console.log(auth.login("admin","admin2"));
    auth.setStrategy(new LoginServiceStrategy())
    console.log(auth.login("admin","admin"));

  }
}
