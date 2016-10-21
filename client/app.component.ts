import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li>Days 1-6: <a routerLink="/tour-of-vegetables" routerLinkActive="active">Tour of Vegetables</a></li>
            <li>Days 7-?: <a routerLink="/message-of-the-moment" routerLinkActive="active">Message of the Moment</a></li>
        <ul>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = '100 Days of Angular 2';
}