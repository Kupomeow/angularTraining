import { Injectable } from '@angular/core';
import { CategoryGame } from '../model/category-game.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    // CATEGORIES CREATION
    categories: CategoryGame[] = [
      { id: 1, name: 'MMORPG' }, { id: 2, name: 'FPS' }, { id: 3, name: 'Plateform' },
      { id: 4, name: 'Arcade' }
    ];

  constructor() { }

  getAll(): CategoryGame[] {
    return this.categories;
  }

  getOne(id: number): CategoryGame {
    return this.categories.filter((category: CategoryGame) => {
      return category.id === id;
    }) [0];
  }
}
