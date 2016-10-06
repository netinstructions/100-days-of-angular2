import { Injectable } from '@angular/core';

import { Vegetable } from './vegetable';

const VEGETABLES: Vegetable[] = [
  { id: 11, name: 'Broccoli' },
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
    getVegetables(): Promise<Vegetable[]> {
        return Promise.resolve(VEGETABLES);
    }

    getVegetable(id: number): Promise<Vegetable> {
        return this.getVegetables().then(vegetables => vegetables.find(vegetable => vegetable.id === id));
    }
}