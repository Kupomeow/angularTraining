import {Game} from './game.model';
import {Comment} from './comment.model';
import {Author} from './author.model';

export interface Post {
  id: number;
  title: string;
  publishingDate: Date;
  paragraphs: string[];
  star: number;
  img: string;
  game: Game;
  comments: Comment[];
  author: Author;
}
