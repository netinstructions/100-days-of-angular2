import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Vegetable } from './vegetable';

const VEGETABLES: Vegetable[] = [
  { id: 11, name: 'Broccolini' },
  { id: 12, name: 'Eggplant' },
  { id: 13, name: 'Tomatoes' },
  { id: 14, name: 'Cucumbers' },
  { id: 15, name: 'Potatos' },
  { id: 16, name: 'Squash' },
  { id: 17, name: 'Cauiflower' },
  { id: 18, name: 'Onions' },
  { id: 19, name: 'Celery' },
  { id: 20, name: 'Peppers' }
];

@Injectable()
export class VegetableService {

    private testUrl = 'api/test';  // URL to web api

    constructor(private http: Http) { 

    }

    getTestMessage(): Promise<string> {
        return this.http.get('api/test')
        .toPromise()
        .then(response => response.json().testMessage)
        .catch(this.handleError);
    }

    getVegetables(): Promise<Vegetable[]> {
        return Promise.resolve(VEGETABLES);
    }

    getVegetable(id: number): Promise<Vegetable> {
        return this.getVegetables().then(vegetables => vegetables.find(vegetable => vegetable.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('Oh noooo! An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}