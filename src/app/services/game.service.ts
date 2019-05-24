import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    // GAMES CREATIONS
    wow: Game = { id: 1, name: 'World Of Warcraft', img: '../../assets/img/wow_logo.jpg', pegi: 12, categories: [this.categoryService.getOne(1)] };
    theDivision2: Game = { id: 2, name: 'The Division 2', img: '../../assets/img/td2_logo.jpg', pegi: 18, categories: [this.categoryService.getOne(1), this.categoryService.getOne(2)] };

    games: Game[] = [this.wow, this.theDivision2];

  constructor(public categoryService: CategoryService) { }

  getAll(): Game[] {
    return this.games;
  }

  getOne(id: number): Game {
    return this.games.filter((game: Game) => {
      return game.id === id;
    }) [0];
  }
}
