import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
​import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  ​
      <ul>
        <li *ngFor="let todoItem of todoList">
         <app-todo-item [item]="todoItem"
                      (remove)="removeItem($event)"
                      (update)="updateItem($event.item, $event.changes)"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})

export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
​
  constructor(private todoListService:TodoListService) { }
​
  ngOnInit() {
    this.todoList = this.todoListService.todoList;
  }

  addItem(title: string) {
      console.log(this.todoListService.todoList)
      var found = false;
      for(var i = 0; i < this.todoListService.todoList.length; i++) {
          if (this.todoListService.todoList[i].title  == title) {
              found = true;
              break;
          }
      }
      if(!found) this.todoListService.addItem({ title });
      else{
        alert("Already in list.")
      }
     
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }
}
