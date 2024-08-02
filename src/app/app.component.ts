import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any[] = [{ title: 'Learn Angular', progress: 'In Progress', id: 1 }, { title: 'Learn React', progress: 'In Progress', id: 2 }, { title: 'Learn Vue', progress: 'In Progress', id: 3 }];
  title = '';
  progress = '';
  editId = null;

  addTodo() {
    if (this.editId == null) {
      let id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
      const todo = { title: this.title, progress: this.progress, id: id };
      this.todos.push(todo);
      this.title = '';
      this.progress = '';
    } else {
      let todo = this.todos.find((t) => t.id == this.editId);
      todo.title = this.title,
        todo.progress = this.progress
      this.editId = null;
      this.title = '';
      this.progress = '';
    }

  }

  editTodo(id: any) {
    let todo = this.todos.find((t) => t.id == id);
    this.editId = id;
    this.title = todo.title;
    this.progress = todo.progress;
  }

  deleteTodo(id: any) {
    let index = this.todos.findIndex((t) => t.id == id);
    this.todos.splice(index, 1);
  }



}
