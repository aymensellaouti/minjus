import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  id = 0;
  constructor(
    private loggerService: LoggerService
  ) { }
  loggerTodo() {
    this.loggerService.logger(this.todos);
  }
  test() {}
  addTodo(todo: Todo): void {
    todo.id = ++this.id;
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo): number {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    return index;
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
