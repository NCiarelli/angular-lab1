import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // @ViewChild('editingTask') editingTask: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  displayedToDos: Todo[] = [
    { task: "fold clothes", completed: false, editing: false },
    { task: "put clothes in dresser", completed: false, editing: false },
    { task: "relax", completed: false, editing: false },
    { task: "try to pet cat", completed: true, editing: false },
    { task: "pet dog", completed: false, editing: false },
    { task: "be awesome", completed: false, editing: false }
  ];

  taskFilter: string = "";
  todoToAdd: Todo = {
    task: "",
    completed: false,
    editing: false
  };

  // function to add tasks to the to-do list from the to-do-list form
  addTask(): void {
    this.displayedToDos.push(this.todoToAdd);
    this.todoToAdd = { task: "", completed: false, editing: false };
  }

  // Function to mark a task as completed and remove the complete button (done through a CSS class linked to the completed flag)
  completeTask(taskCompleted: Todo): void {
    taskCompleted.completed = true;
  }

  // Function to remove a task from the page entirely (used on clicking the X button of a todo item)
  removeTask(taskToRemove: Todo): void {
    const indexOfTodo: number = this.displayedToDos.indexOf(taskToRemove);
    this.displayedToDos.splice(indexOfTodo, 1);
  }

  // Function to filter the displayed todo items, used by the filter input text field
  // Included toLowerCase calls to make the filtering case insensitive
  filterTodoItems(): Todo[] {
    const filterText: string = this.taskFilter;
    const filteredList = this.displayedToDos.filter(function (currentItem) {
      return currentItem.task.toLowerCase().includes(filterText.toLowerCase());
    });
    return filteredList;
  }

  clearFilter(): void {
    this.taskFilter = "";
  }

  startEdit(taskClicked: Todo) {
    taskClicked.editing = true;
  }

  taskEdit(taskToEdit: Todo) {
    taskToEdit.editing = false;
  }
}
