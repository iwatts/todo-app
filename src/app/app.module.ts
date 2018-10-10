import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { LH_OptionsComponent } from './list-header/lh-options/lh-options.component';
import { LH_FilterComponent } from './list-header/lh-filter/lh-filter.component';

import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { LT_TaskComponent } from './list-tasks/lt-task/lt-task.component';

import { ListModalComponent } from './list-modal/list-modal.component';

import { TaskService } from './services/task.service';


@NgModule({
    declarations: [
        AppComponent,
        ListHeaderComponent,
        LH_OptionsComponent,
        LH_FilterComponent,
        ListTasksComponent,
        LT_TaskComponent,
        ListModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }