import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To Do List';

  constructor(service: TaskService) {
    //debugger
	service.getIncompleteTasks();
	
	// toggle property
	private toggle : boolean = false;

    //method
    clickEvent(event){
       // change toggle variable.
       this.toggle != this.toggle;       
    }
  }
}
