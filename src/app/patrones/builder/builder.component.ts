import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Builder es un patrón de diseño creacional que nos permite
     * construir objetos complejos paso a paso. El patrón nos permite
     * producir distintos tipos y representaciones de un objeto empleando
     * el mismo código de construcción.
     */

    class Computer {
      private CPU: string;
      private Motherboard: string;
      private RAM: number;
      private Graphic: string;

      constructor(
        CPU: string,
        Motherboard: string,
        RAM: number,
        Graphic: string
      ) {
        this.CPU = CPU;
        this.Motherboard = Motherboard;
        this.RAM = RAM;
        this.Graphic = Graphic;
      }
    }

    interface ComputerBuilder {
      CPU: string;
      Motherboard: string;
      RAM: number;
      Graphic: string;

      setCPU(CPU: string): ComputerBuilder;
      setMotherboard(Motherboard: string): ComputerBuilder;
      setRAM(RAM: number): ComputerBuilder;
      setGraphic(Graphic: string): ComputerBuilder;
      build();
    }

    class GamerComputerBuilder implements ComputerBuilder {
      CPU: string;
      Motherboard: string;
      RAM: number;
      Graphic: string;

      constructor() {
        this.CPU = '';
        this.Motherboard = '';
        this.RAM = 0;
        this.Graphic = '';
      }

      reset() {
        this.CPU = '';
        this.Motherboard = '';
        this.RAM = 0;
        this.Graphic = '';
      }

      setCPU(CPU: string): ComputerBuilder {
        this.CPU = CPU;
        return this;
      }

      setMotherboard(Motherboard: string): ComputerBuilder {
        this.Motherboard = Motherboard;
        return this;
      }
      setRAM(RAM: number): ComputerBuilder {
        this.RAM = RAM;
        return this;
      }
      setGraphic(Graphic: string): ComputerBuilder {
        this.Graphic = Graphic;
        return this;
      }

      build(): Computer {
        const computer = new Computer(this.CPU, this.Motherboard, this.RAM, this.Graphic);
        this.reset();
        return computer;
      }
    }

    class ComputerGeekDirector{

      private computerBuilder:ComputerBuilder;

      constructor(computerBuilder:ComputerBuilder){
        this.computerBuilder = computerBuilder;
      }

      setComputerBuilder(computerBuilder:ComputerBuilder){
        this.computerBuilder= computerBuilder;
      }

      createBasicComputer(cpu:string,ram:number,motherboard:string){
        this.computerBuilder.setCPU(cpu).setMotherboard(motherboard).setRAM(8);        
      }

    }

    const computerBuilder = new GamerComputerBuilder();
    const mamalona = computerBuilder.setCPU("Intel i9")
                    .setGraphic("Nvidia 3090")
                    .setRAM(32)
                    .setMotherboard("Asus X29").build();
    console.log(mamalona);

    const geek = new ComputerGeekDirector(computerBuilder);
    geek.createBasicComputer("Intel Celeron",8,"Raedeon X2");
    
    const computerOficina = computerBuilder.build();
    console.log(computerOficina);
    
  }
}
