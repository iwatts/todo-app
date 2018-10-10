import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskService } from './task.service';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListComponent } from './list/list.component';
import { AnModelComponent } from './an-model/an-model.component'

@NgModule({
    declarations: [
        AppComponent,
        ListHeaderComponent,
        ListComponent,
        AnModelComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
