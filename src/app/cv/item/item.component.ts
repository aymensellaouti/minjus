import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectItem = new EventEmitter();
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  selectPersonne() {
    this.selectItem.emit(this.personne);
    this.todoService.loggerTodo();
  }

}
