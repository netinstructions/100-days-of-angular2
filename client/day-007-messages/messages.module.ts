import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessagesComponent
  ],
  providers: [
    MessagesService
  ]
})
export class MessagesModule {}