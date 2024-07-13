import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss'],
})
export class AdapterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /**
     * Adapter es un patrón de diseño estructural que permite la colaboración entre
     * objetos con interfaces incompatibles.
     */

    interface NewCarDetails {
      getCarInfo(): string;
    }

    class OldCarDetails {
      constructor(
        private make: string,
        private model: string,
        private year: number
      ) {}

      getDetails(): string {
        return `${this.make} ${this.model} (${this.year})`;
      }
    }
    
    class CarDetailsAdapter implements NewCarDetails {
      private oldCarDetails: OldCarDetails;

      constructor(oldCarDetails: OldCarDetails) {
        this.oldCarDetails = oldCarDetails;
      }

      getCarInfo(): string {
        // Adapt the old format to the new format
        return this.oldCarDetails.getDetails();
      }
    }
  

    const oldCarDetails = new OldCarDetails('Toyota', 'Camry', 2020);
    const adapter = new CarDetailsAdapter(oldCarDetails);

    console.log('Client: I can use the new interface with the adapter.');
    console.log( adapter.getCarInfo());
  }
}
