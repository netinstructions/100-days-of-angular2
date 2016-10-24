import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vegetable } from './vegetable';
import { VegetableService } from './vegetable.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    vegetables: Vegetable[] = [];

    constructor(private router: Router, private vegetableService: VegetableService) {

    }

    ngOnInit(): void {
        this.vegetableService.getVegetables().then(vegetables => this.vegetables = vegetables.slice(1, 5));
    }

    gotoDetail(vegetable : Vegetable): void {
        let link = ['/tour-of-vegetables/detail', vegetable.id];
        this.router.navigate(link);
    }
}