import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablesComponent } from './vegetables.component';
import { DashboardComponent } from './dashboard.component';
import { VegetableDetailComponent } from './vegetable-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: VegetableDetailComponent
    },
    {
        path: 'vegetables',
        component: VegetablesComponent
    },
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
    
}