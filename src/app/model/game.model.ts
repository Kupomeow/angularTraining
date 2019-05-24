import {CategoryGame} from './category-game.model';

export interface Game {
  id: number;
  name: string;
  img: string;
  pegi: 3 | 7 | 12 | 16 | 18;
  categories: CategoryGame[];
}
