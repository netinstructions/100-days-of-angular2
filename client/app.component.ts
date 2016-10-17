import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/vegetables" routerLinkActive="active">Vegetables</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = '100 Vegetables of Angular 2';
}