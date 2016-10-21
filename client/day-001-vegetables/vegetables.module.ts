import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VegetablesRoutingModule } from './vegetables-routing.module';

import { VegetablesAppComponent } from './vegetables-app.component';
import { DashboardComponent } from './dashboard.component';
import { VegetablesComponent } from './vegetables.component';
import { VegetableDetailComponent } from './vegetable-detail.component'
import { VegetableService } from './vegetable.service';

@NgModule({
  imports:      [ 
    FormsModule,
    HttpModule,
    VegetablesRoutingModule
  ],
  declarations: [ 
    DashboardComponent,
    VegetableDetailComponent,
    VegetablesComponent,
    VegetablesAppComponent
  ],
  providers: [
    VegetableService
  ]
})
export class VegetablesModule { }
