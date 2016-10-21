import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesAppComponent } from './day-001-vegetables/vegetables-app.component';
import { MessagesComponent } from './day-007-messages/messages.component';

const routes: Routes = [
    
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
    
}