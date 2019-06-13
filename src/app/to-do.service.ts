import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  // Last id simulator. To provide and autoincrement id.
  lastId : number = 0;
  
  // Emtpy list of Todo's initially.
  todos : Todo[] = [];

  constructor() { }

  // Add a activity to do.
  addTodo(todo: Todo)  {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
      
    this.todos.push(todo);
    return this;
  }

  // Delete an activity to do.
  deleteTodoById(idToDelete: number) {
    this.todos = this.todos.filter(todo => todo.id !== idToDelete);
    return this;
  }

  // get all todos.
  getAllTodos() : Todo[] {
    return this.todos;
  }

  // Get todo by id.
  getTodoById(id: number): Todo {
    return this
              .todos.filter(todo => todo.id === id)
              .pop();
  }

  // update a todo.
  updateTodoById(id: number, values: Object = {}) : Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }

  // Toggle todo complete.
  toggleTodoComplete(todo:Todo) {
    console.log(`toggletodocomplete: ${todo.complete}`)
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  getRemainingTodos(): number {
    let remainingElem : number = 0;
    this.todos.forEach(todo=> todo.complete === true ? remainingElem: remainingElem++ )

    return remainingElem;
  }


}
