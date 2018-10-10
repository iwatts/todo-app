import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { LH_OptionsComponent } from './list-header/lh-options/lh-options.component';
import { LH_FilterComponent } from './list-header/lh-filter/lh-filter.component';


@NgModule({
    declarations: [
        AppComponent,
        ListHeaderComponent,
        LH_OptionsComponent,
        LH_FilterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }