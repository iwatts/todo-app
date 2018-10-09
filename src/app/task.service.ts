import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    Tasks:Task[] = [];
    tasks$: Observable<Task[]>;
    observers = [];
    incompleteTasksObservers = [];

	constructor() {
        this.tasks$ = Observable.create(observer => {
            this.observers.push(observer);
        });
    }

	getCompleteTasks() {
        //return this.Tasks.filter(task => task.done);
        return this.tasks$.pipe(
            map(Tasks => Tasks.filter(task => task.done))
        )
	}

	getIncompleteTasks() {
        //return this.Tasks.filter(task => !task.done);
        return this.tasks$.pipe(
            map(Tasks => Tasks.filter(task => !task.done))
        )
	}

    updateObservers() {
        this.observers.forEach(observer => {
            observer.next(this.Tasks.filter(task => task.done));
        })
    }

	addTask(task:Task) {
        this.Tasks.push(task);
        this.updateObservers();
	}

	updateTask(task:Task) {
		let index = this.Tasks.findIndex((current)=>current.tid == task.tid);
		this.Tasks[index] = task;
        this.updateObservers();
	}
}

export interface Task {
	tid:number
	desc:string
	done:boolean
}
