import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vegetable } from './vegetable';
import { VegetableService } from './vegetable.service';


@Component({
  selector: 'my-vegetables',
  template:`
    <h1>{{title}}</h1>
    <h2>My Vegetables</h2>
    <ul class="vegetables">
      <li *ngFor="let vegetable of vegetables" 
        [class.selected]="vegetable === selectedVegetable"
        (click)="onSelect(vegetable)">
        <span class="badge">{{vegetable.id}}</span> {{vegetable.name}}
      </li>
    </ul>
    <my-vegetable-detail [vegetable]="selectedVegetable"></my-vegetable-detail>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .vegetables {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .vegetables li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .vegetables li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .vegetables li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .vegetables .text {
    position: relative;
    top: -3px;
  }
  .vegetables .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #FF7DAA;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
  providers: [VegetableService]
})

export class VegetablesComponent implements OnInit {
  vegetables: Vegetable[];
  selectedVegetable: Vegetable;

  constructor(private router: Router, private vegetableService: VegetableService) {

  }

  getVegetables(): void {
    this.vegetableService.getVegetables().then(vegetables => this.vegetables = vegetables);
  }

  ngOnInit(): void {
    this.getVegetables();
  } 
  
  onSelect(vegetable: Vegetable): void {
    this.selectedVegetable = vegetable;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedVegetable.id]);
  }
}
