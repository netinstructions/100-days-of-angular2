import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';

import { VegetablesModule } from './day-001-vegetables/vegetables.module';

import { MessagesComponent } from './day-007-messages/messages.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    VegetablesModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    MessagesComponent
  ],
  providers: [
    
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
