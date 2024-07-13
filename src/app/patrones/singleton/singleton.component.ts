import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss'],
})
export class SingletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Creacional
     * Singleton es un patrón de diseño creacional que nos permite asegurarnos
     * de que una clase tenga una única instancia, a la vez que proporciona un
     * punto de acceso global a dicha instancia.
     */

    class Singleton {
      static getInstance() {
        return Singleton.instance;
      }

      private static instance: Singleton;
      constructor() {
        if (Singleton.instance) {
          console.log('Console A');
          return Singleton.instance;
        }
        Singleton.instance = this;
        console.log('Console B');
      }
    }

    const sg = new Singleton();
    const sg2 = new Singleton();


    //Ejercicio 1
    class Weekdays {
      private static instance: Weekdays;
      daysEs = ['Lunes', 'Martes', 'Miercoles'];

      daysEn = ['Monday', 'Tuesday', 'Wednesday'];

      lang;
      constructor(lang) {
        this.lang = lang;
        if(Weekdays.instance){
          return Weekdays.instance
        }
        Weekdays.instance = this;
      }

      getDays(){
        return this.lang == "es"? this.daysEs: this.daysEn;
      }
    }

    const wd = new Weekdays("es");    
    const wd2 = new Weekdays("en");
    console.log(wd.getDays());
    console.log(wd2.getDays());



     //Ejercicio 2 TS
     class SingletonTS {
      private static instance: SingletonTS;
      private static daysEs = ['Lunes', 'Martes', 'Miercoles'];
      constructor() {
      }

      public static getInstance(): SingletonTS{
        if(!this.instance){
          this.instance = new SingletonTS();
        }
        return this.instance
      }

      public static getDays(){
        return this.daysEs;
      }
    }

    console.log(SingletonTS.getDays());
  }
}
