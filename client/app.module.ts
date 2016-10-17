import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { VegetablesComponent } from './vegetables.component';
import { VegetableDetailComponent } from './vegetable-detail.component'
import { VegetableService } from './vegetable.service';
import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    VegetableDetailComponent,
    VegetablesComponent
  ],
  providers: [
    VegetableService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
