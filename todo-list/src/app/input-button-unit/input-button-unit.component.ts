import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  ngOnInit() {
  }

  title: string = 'Hello World';
  ​
  constructor() { 
    this.changeTitle('My First Angular App');
    // this.title = 'I Love Angular';
  }
  ​
  ngOnInit() { 
    this.title = 'Angular CLI Rules!';
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
