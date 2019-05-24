import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // USER CREATION
  user1: User = { id: 1, login: 'user3', password: 'user3', img: '../../assets/img/user.png' };
  user2: User = { id: 2, login: 'user4', password: 'user4', img: '../../assets/img/user.png' };
  user3: User = { id: 3, login: 'user5', password: 'user5', img: '../../assets/img/user.png' };

  users: User[] = [this.user1, this.user2, this.user3];

  constructor() { }

  getAll(): User[] {
    return this.users;
  }

  getOne(id: number): User {
    return this.users.filter((user: User) => {
      return user.id === id;
    }) [0];
  }
}
