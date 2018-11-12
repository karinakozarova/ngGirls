import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
​

@Component({
  selector: 'app-input-button-unit',
    template: `
      <input #inputElementRef
             [value]="title"
             (keyup.enter)="submitValue($event.target.value)">
    ​
      <button (click)="submitValue(inputElementRef.value)">
        Save
      </button>
    `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
​  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }
​
  ngOnInit() {
  }
​
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  
  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
}