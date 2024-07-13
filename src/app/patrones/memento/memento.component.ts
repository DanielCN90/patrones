import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.scss'],
})
export class MementoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Comportamiento
     * Memento es un patrón de diseño de comportamiento que te permite guardar
     * y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.
     */

    class Memento {
      private state: string;

      constructor(state: string) {
        this.state = state;
      }

      public getState(): string {
        return this.state;
      }
    }

    class TextEditor {
      private state: string;
      constructor() {
        this.state = '';
      }

      public type(words: string): void {
        this.state += words;
      }

      public save(): Memento {
        return new Memento(this.state);
      }

      public restore(memento: Memento): void {
        this.state = memento.getState();
      }

      public getContent(): string {
        return this.state;
      }
    }

    class History {
      private mementos: Memento[] = [];

      public push(memento: Memento): void {
        this.mementos.push(memento);
      }

      public pop(): Memento  {
        return this.mementos.pop();
      }
    }

    const editor = new TextEditor();
    const history = new History();

    editor.type('Hello, ');
    editor.type('world!');
    console.log(editor.getContent()); // Output: Hello, world!

    history.push(editor.save());

    editor.type(' More text.');
    console.log(editor.getContent()); // Output: Hello, world! More text.

    editor.restore(history.pop());
    console.log(editor.getContent()); // Output: Hello, world!
  }
}
