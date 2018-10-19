import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    public tasks: Task[] = [];

    constructor() {
    }

    public getCompleteTasks() {
        return this.tasks.filter(task => task.done);
    }

    public getIncompleteTasks() {
        return this.tasks.filter(task => !task.done);
    }

    public addTask(task: Task) {
        // push new task to incomplete list, getting name from input
        this.tasks.push(task);
    }

    public updateTaskStatus() {
        // change done status on task
        return this.getIncompleteTasks();
    }
}

export interface Task {
    id: number
    description: string
    done: boolean
}
