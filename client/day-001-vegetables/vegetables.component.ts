import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vegetable } from './vegetable';
import { VegetableService } from './vegetable.service';


@Component({
  selector: 'my-vegetables',
  templateUrl : './vegetables.component.html',
  styleUrls: [ './vegetables.component.css' ],
  providers: [VegetableService]
})

export class VegetablesComponent implements OnInit {
  vegetables: Vegetable[];
  selectedVegetable: Vegetable;
  testMessageFromServer: string;

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
    this.router.navigate(['/tour-of-vegetables/detail', this.selectedVegetable.id]);
  }

  testServer(): void {
    this.vegetableService.getTestMessage().then(response => this.testMessageFromServer = response);
  }
}
