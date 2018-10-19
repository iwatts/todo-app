import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';

import { ListHeaderComponent } from './components/list-header/list-header.component';
import { LH_OptionsComponent } from './components/list-header/lh-options/lh-options.component';
import { ListHeaderFilterComponent } from './components/list-header/lh-filter/lh-filter.component';

import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { ToDoTaskComponent } from './components/list-tasks/lt-task/lt-task.component';

import { ListModalComponent } from './components/list-modal/list-modal.component';

import { TaskService } from './services/task.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        ListHeaderComponent,
        LH_OptionsComponent,
        ListHeaderFilterComponent,
        ListTasksComponent,
        ToDoTaskComponent,
        ListModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MaterialAppModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }