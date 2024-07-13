import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chain-of-responsability',
  templateUrl: './chain-of-responsability.component.html',
  styleUrls: ['./chain-of-responsability.component.scss'],
})
export class ChainOfResponsabilityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**Tipo: Comportamiento
     * Chain of Responsibility es un patrón de diseño de comportamiento que te 
     * permite pasar solicitudes a lo largo de una cadena de manejadores. 
     * Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al 
     * siguiente manejador de la cadena.
     */

    interface SupportHandler {
      setNext(handler: SupportHandler): SupportHandler;
      handle(request: string): void;
    }

    abstract class AbstractSupportHandler implements SupportHandler {
      private nextHandler: SupportHandler | null = null;

      public setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
      }

      public handle(request: string): void {
        if (this.nextHandler) {
          this.nextHandler.handle(request);
        }else{
          console.log('Handling request anyway.');
        }
      }
    }

    class BasicSupportHandler extends AbstractSupportHandler {
      public override handle(request: string): void {
        if (request === 'basic') {
          console.log('BasicSupportHandler: Handling basic request.');
        } else {
          super.handle(request);
        }
      }
    }

    class IntermediateSupportHandler extends AbstractSupportHandler {
      public override handle(request: string): void {
        if (request === 'intermediate') {
          console.log(
            'IntermediateSupportHandler: Handling intermediate request.'
          );
        } else {
          super.handle(request);
        }
      }
    }

    class AdvancedSupportHandler extends AbstractSupportHandler {
      public override handle(request: string): void {
        if (request === 'advanced') {
          console.log('AdvancedSupportHandler: Handling advanced request.');
        } else {
          super.handle(request);
        }
      }
    }

    const basicHandler = new BasicSupportHandler();
    const intermediateHandler = new IntermediateSupportHandler();
    const advancedHandler = new AdvancedSupportHandler();

    basicHandler.setNext(intermediateHandler).setNext(advancedHandler);

    console.log('Client: Sending basic request.');
    basicHandler.handle('basic');

    console.log('\nClient: Sending intermediate request.');
    basicHandler.handle('intermediate');

    console.log('\nClient: Sending advanced request.');
    basicHandler.handle('advanced');

    console.log('\nClient: Sending unknown request.');
    basicHandler.handle('unknown');
  }
}
