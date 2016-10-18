import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { VegetablesComponent } from './vegetables.component';
import { VegetableDetailComponent } from './vegetable-detail.component'
import { VegetableService } from './vegetable.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
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
