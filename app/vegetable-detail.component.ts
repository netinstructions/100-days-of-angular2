import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import { Vegetable } from './vegetable';
import { VegetableService } from './vegetable.service';

@Component({
    selector: 'my-vegetable-detail',
    templateUrl: './vegetable-detail.component.html',
    styleUrls: [ './vegetable-detail.component.css']
})

export class VegetableDetailComponent implements OnInit {
    vegetable: Vegetable;

    constructor(
      private vegetableService: VegetableService,
      private route: ActivatedRoute,
      private location: Location
    ) {

    }

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id']; // Convert id string into number with JavaScript + operator
        this.vegetableService.getVegetable(id).then(vegetable => this.vegetable = vegetable)
      });
    }

    goBack(): void {
      this.location.back();
    }
}