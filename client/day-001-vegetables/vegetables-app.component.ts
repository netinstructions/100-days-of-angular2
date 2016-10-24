import { Component } from '@angular/core';

@Component({
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="vegetables" routerLinkActive="active">Vegetables</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./vegetables-app.css']
})

export class VegetablesAppComponent {
    title = 'Tour of Vegetables';
}