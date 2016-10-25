import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
    template: `
        <h2>Message of the Moment</h2>
        <p style="padding-right: 40px"><em>{{currentMessage}}</em></p>
        <p style="padding-top: 40px">Would you like to set the message of the moment, for all to see?<p>
        <p>Or at least... until the next person sets it...?</p>
        <label>New Message of the Moment: </label>
        <input [(ngModel)]="newMessage" placeholder="I think carrots are just ok." />
        <button (click)="submitMessage()">Declare this message to be the Message of the Moment</button>
    `,
    providers: [MessagesService]
})

export class MessagesComponent implements OnInit {
    
    currentMessage: string = '';
    newMessage: string;

    constructor(private messagesService: MessagesService) {

    }

    ngOnInit(): void {
        this.messagesService.getMessageOfTheMoment().then(message => this.currentMessage = message);
    }

    submitMessage(): void {
        this.messagesService.postMessage(this.newMessage).then(message => this.currentMessage = message);
    }

    
}