import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Comportamiento
     * State es un patrón de diseño de comportamiento que permite
     * a un objeto alterar su comportamiento cuando su estado interno cambia.
     * Parece como si el objeto cambiara su clase.
     */

    interface State {
      next(ticker: Ticket): number | null;
      add(ticket: Ticket, qty: number): void;
    }

    class Ticket {
      private state: State;
      qty: number;
      readonly max: number;
      private number: number;

      constructor(limit: number) {
        this.max = limit;
        this.qty = 0;
        this.number = 0;
        this.state = new EmptyState();
      }

      get getNumber(): number {
        return this.number++;
      }
      set setState(state: State) {
        this.state = state;
      }
      get getState() {
        return this.state
      }
      next(): number | null {
        return this.state.next(this);
      }

      add(qty: number): void {
        this.state.add(this, qty);
      }
    }

    class EmptyState implements State {
      next(ticket: Ticket): null {
        return null;
      }
      add(ticket: Ticket, qty: number): void {
        if (qty < ticket.max) {
          ticket.qty = qty;
          ticket.setState = new WithDataState();
        } else {
          ticket.qty = qty;
          ticket.setState = new FullState();
        }
      }
    }

    class WithDataState implements State {
      next(ticket: Ticket): number | null {
        ticket.qty--;
        if (ticket.qty <= 0) {
          ticket.setState = new EmptyState();
          return ticket.getNumber;
        }
        return ticket.getNumber;
      }
      add(ticket: Ticket, qty: number): void {
        if (ticket.qty + qty < ticket.max) {
          ticket.qty = qty;
          ticket.setState = new WithDataState();
        } else if (qty == ticket.max) {
          ticket.qty = qty;
          ticket.setState = new FullState();
        }
      }
    }

    class FullState implements State {
      next(ticket: Ticket): number | null {
        ticket.qty--;
        if (ticket.qty <= 0) {
          ticket.setState = new EmptyState();
        } else {
          ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
      }
      add(ticket: Ticket, qty: number): void {
        console.log('No se puede agregar mas cosas');
      }
    }

    const ticket = new Ticket(5);
    console.log(ticket.getState);
    console.log(ticket.next());
    ticket.add(6);
    console.log(ticket.getState);
    console.log(ticket.next());
    ticket.add(4);
    console.log(ticket.getState);
    console.log(ticket.next());
    console.log(ticket.next());
  }
}
