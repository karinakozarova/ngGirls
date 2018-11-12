import { Component, OnInit } from '@angular/core';
​
@Component({
  selector: 'app-input-button-unit',
    template: `
      <input [value]="title"
             (keyup.enter)="changeTitle($event.target.value)">
  ​
      <button (click)="changeTitle('Button Clicked!')">
        Save
      </button>
    `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
​
  constructor() { }
​
  ngOnInit() {
  }
​
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}