import { Injectable } from '@angular/core';
import { Comment } from '../model/comment.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // COMMENTS CREATION
  comment1: Comment = { id: 1, date: new Date('May 12, 2019 15:30:00'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien.', user: this.userService.getOne(1) };
  comment2: Comment = { id: 2, date: new Date('May 22, 2019 16:40:12'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: this.userService.getOne(2) };
  comment3: Comment = { id: 3, date: new Date('May 22, 2019 16:45:43'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien.', user: this.userService.getOne(3) };

  comments: Comment[] = [this.comment1, this.comment2, this.comment3];


  constructor(public userService: UserService) { }

  getAll(): Comment[] {
    return this.comments;
  }

  getOne(id: number): Comment {
    return this.comments.filter((comment: Comment) => {
      return comment.id === id;
    }) [0];
  }

}
