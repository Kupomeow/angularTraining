import { Injectable } from '@angular/core';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  // AUTHORS CREATION
  kupoAuthor: Author = { id: 1, login: 'kupo', password: 'kupo', img: '../../assets/img/user.png', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum.' };
  chocoAuthor: Author = { id: 2, login: 'choco', password: 'choco', img: '../../assets/img/user.png', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum.' };

  authors: Author[] = [this.kupoAuthor, this.chocoAuthor];


  constructor() { }

  getAll(): Author[] {
    return this.authors;
  }

  getOne(id: number): Author {
    return this.authors.filter((author: Author) => {
      return author.id === id;
    }) [0];
  }
}
