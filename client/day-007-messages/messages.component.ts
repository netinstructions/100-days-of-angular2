import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    providers: [MessagesService]
})

export class MessagesComponent implements OnInit {
    
    currentMessage: string = '';
    newMessage: string;
    validationResponse: string;

    constructor(private messagesService: MessagesService) {

    }

    ngOnInit(): void {
        this.messagesService.getMessageOfTheMoment().then(message => this.currentMessage = message);
    }

    submitMessage(): void {
        this.messagesService.postMessage(this.newMessage).then(response => {
            if(response.error) {
                this.validationResponse = 'Your message of the moment is ' + response.length + ' characters! Please keep it under 500 characters.';
            } else if (response.message) {
                this.currentMessage = response.message;
                this.validationResponse = null;
            }
        });
    }


}