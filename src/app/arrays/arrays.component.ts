import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss'],
})
export class ArraysComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // map()
    // The map method lets you loop on each element inside the array,
    // and manipulate them as per the requirement.
    const numbers = [2, 4, 6, 8, 10];
    const numbersMap = numbers.map((element) => element * 2);
    console.log(numbersMap); //[4, 8, 12, 16, 20];

    // filter()
    // The filter method lets you create a new array based on 
    // conditions that evaluate to true from the original array.
    const numbers2 = [1, 2, 3, 4];
    const filtered = numbers2.filter((element) => element === 2);
    console.log(filtered); //[2]
  }
}
