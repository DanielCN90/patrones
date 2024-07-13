import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss'],
})
export class PrototypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Tipo: Creacional
     * Prototype es un patrón de diseño creacional que nos permite copiar
     * objetos existentes sin que el código dependa de sus clases.
     */

    interface Prototype {
      clone(): Prototype;
    }
    class Document implements Prototype {
      public title: string;
      public content: string;

      constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
      }

      public clone(): Document {
        return new Document(this.title, this.content);
      }

      public display(): void {
        console.log(`Document: ${this.title}\nContent: ${this.content}`);
      }
    }
    const originalDocument = new Document('Contract', 'This is a contract.');
    console.log('Original Document:');
    originalDocument.display();

    const clonedDocument = originalDocument.clone();
    console.log('\nCloned Document:');
    clonedDocument.display();
  }
}
