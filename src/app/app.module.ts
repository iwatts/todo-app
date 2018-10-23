import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { LH_OptionsComponent } from './components/list-header/lh-options/lh-options.component';
import { ListHeaderFilterComponent } from './components/list-header/lh-filter/lh-filter.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { ToDoTaskComponent } from './components/list-tasks/lt-task/lt-task.component';
import { reducers, metaReducers } from './store/reducers';
import { ListModalComponent } from './components/list-modal/list-modal.component';

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
        StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }