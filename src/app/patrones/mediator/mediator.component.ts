import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss'],
})
export class MediatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Mediator es un patrón de diseño de comportamiento que te permite reducir las
     * dependencias caóticas entre objetos. El patrón restringe las comunicaciones
     * directas entre los objetos, forzándolos a colaborar únicamente a través de un objeto mediador.
     */

    interface ChatMediator {
      sendMessage(message: string, user: User): void;
      addUser(user: User): void;
    }
    class ChatRoom implements ChatMediator {
      private users: User[] = [];

      addUser(user: User): void {
        this.users.push(user);
      }

      sendMessage(message: string, sender: User): void {
        for (const user of this.users) {
          if (user !== sender) {
            user.receive(message);
          }
        }
      }
    }
    abstract class User {
      protected mediator: ChatMediator;
      protected name: string;

      constructor(mediator: ChatMediator, name: string) {
        this.mediator = mediator;
        this.name = name;
      }

      abstract send(message: string): void;
      abstract receive(message: string): void;
    }
    class ConcreteUser extends User {
      constructor(mediator: ChatMediator, name: string) {
        super(mediator, name);
      }

      send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.sendMessage(message, this);
      }

      receive(message: string): void {
        console.log(`${this.name} receives: ${message}`);
      }
    }
    const chatMediator = new ChatRoom();

    const user1 = new ConcreteUser(chatMediator, 'Alice');
    const user2 = new ConcreteUser(chatMediator, 'Bob');
    const user3 = new ConcreteUser(chatMediator, 'Charlie');

    chatMediator.addUser(user1);
    chatMediator.addUser(user2);
    chatMediator.addUser(user3);

    user1.send('Hi everyone!');
    user2.send('Hello Alice!');
  }
}
