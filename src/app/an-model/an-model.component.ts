import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-an-model',
  templateUrl: './an-model.component.html',
  styleUrls: ['./an-model.component.scss']
})
export class AnModelComponent implements OnInit {
    @Input()public showmodel;

    constructor() { }

    ngOnInit() {
    }

}
