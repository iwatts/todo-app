import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    Tasks: Task[] = [];

    constructor() {
    }

    getCompleteTasks() {
        //return this.Tasks.filter(task => task.done);
    }

    getIncompleteTasks() {
        //return this.Tasks.filter(task => !task.done);
    }

    addTask(task: Task) {
        // push new task to incomplete list, getting name from input
    }

    updateTask(task: Task) {
        // change done status on task

    }
}

export interface Task {
    tid: number
    desc: string
    done: boolean
}
