import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
    @Input() public list:Task[] = [];

    @Output() public update = new EventEmitter()
    constructor() { }
    
    ngOnChanges(){
        
    }

    ngOnInit() {
    }

}
