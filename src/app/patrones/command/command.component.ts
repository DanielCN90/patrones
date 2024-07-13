import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /**
     * Command es un patrón de diseño de comportamiento que convierte 
     * una solicitud en un objeto independiente que contiene toda la información
     *  sobre la solicitud. Esta transformación te permite parametrizar los 
     * métodos con diferentes solicitudes, retrasar o poner en cola la ejecución 
     * de una solicitud y soportar operaciones que no se pueden realizar.
     */

    interface Command {
      execute():void
    }

    class LightOnCommand implements Command{

      private light: Light;
       constructor(light:Light){
        this.light = light;
       }

       execute(): void {
         this.light.turnOn();
       }

    }

    class LightOffCommand implements Command{
      private light: Light;
      constructor(light:Light){
       this.light = light;
      }

      execute(): void {
        this.light.turnOff();
      }
    }

    class Light{

      public turnOn():void {
        console.log("The light is on");
      }
      public turnOff():void{
        console.log("The light is off");
      }
    }


    class RemoteControl {
      private command: Command;

      public setCommand (command:Command):void{
        this.command = command;
      }

      public pressButton():void{
        this.command.execute();
      }

    }


    const light = new Light;
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);
    const remote = new RemoteControl();

    remote.setCommand(lightOn)
    remote.pressButton();

    remote.setCommand(lightOff);
    remote.pressButton();

  }

}
