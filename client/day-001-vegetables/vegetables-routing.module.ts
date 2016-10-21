import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VegetablesAppComponent } from './vegetables-app.component';
import { VegetablesComponent } from './vegetables.component';
import { DashboardComponent } from './dashboard.component';
import { VegetableDetailComponent } from './vegetable-detail.component';


const routes: Routes = [
    {
        path: 'tour-of-vegetables',
        component: VegetablesAppComponent,
        children: [
            {
                path: '/',
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
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})

export class VegetablesRoutingModule {

}