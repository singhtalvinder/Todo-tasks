import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoService]
})
export class AppComponent {
  title = 'TodoApp';

  newTodo: Todo = new Todo();

  constructor(private _todoService: ToDoService) {}

  // Add a todo.
  addTodo() {
    this._todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  // Toggle todo complete.
  toggleTodoComplete(todo) {
    this._todoService.toggleTodoComplete(todo);
  }

  // Remove todo.
  removeTodo(todo) {
    this._todoService.deleteTodoById(todo.id);
  }

  // Get all todos.
  get todos() {
    return this._todoService.getAllTodos();
  }

  getRemainingTodos() {
    return this._todoService.getRemainingTodos();
  }

}

