import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    Tasks: Task[] = [];

    constructor() {
    }

    getCompleteTasks() {
        return this.Tasks.filter(task => task.done);
    }

    getIncompleteTasks() {
        return this.Tasks.filter(task => !task.done);
    }

    addTask(task: Task) {
        // push new task to incomplete list, getting name from input
        this.Tasks.push(task);
    }

    updateTaskStatus() {
        // change done status on task
        return this.getIncompleteTasks();
    }
}

export interface Task {
    id: number
    description: string
    done: boolean
}
