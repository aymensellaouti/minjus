import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../Model/todo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  goToCv() {
    this.router.navigate(['cv']);
  }
}
