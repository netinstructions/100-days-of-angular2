import { Component, Input } from '@angular/core';

import { Vegetable } from './vegetable';

@Component({
    selector: 'my-vegetable-detail',
    template: `
    <div *ngIf="vegetable">
      <h2>{{vegetable.name}} details!</h2>
      <div><label>id: </label>{{vegetable.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="vegetable.name" placeholder="name">
      </div>
    </div>
    `
})

export class VegetableDetailComponent {
    @Input()
    vegetable: Vegetable;
}