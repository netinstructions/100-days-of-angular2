import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { VegetableDetailComponent } from './vegetable-detail.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    VegetableDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
