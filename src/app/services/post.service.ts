import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { AuthorService } from './author.service';
import { GameService } from './game.service';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  // POSTS CREATIONS
  posts: Post[] = [
    {
      id: 1, title: 'World Of Warcraft is back !', publishingDate: new Date('May 21, 2019 14:30:00'),
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.'],
      star: 4, img: '../../assets/img/wow_classic.jpg', game: this.gameService.getOne(1), author: this.authorService.getOne(1), comments: [this.commentService.getOne(1), this.commentService.getOne(2), this.commentService.getOne(3)]
    } as Post,
    {
      id: 2, title: 'The Divion 2: Patch 1.15 released', publishingDate: new Date('May 23, 2019 10:12:00'), paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.'],
      star: 3,
      img: '../../assets/img/td2.jpg', game: this.gameService.getOne(2), author: this.authorService.getOne(2), comments: [this.commentService.getOne(1), this.commentService.getOne(3)]
    } as Post
  ]
  
  constructor(public authorService: AuthorService, public gameService: GameService, public commentService: CommentService) { }

  getAll(): Post[] {
    return this.posts;
  }

  getOne(id: number): Post {
    return this.posts.filter((post: Post) => {
      return post.id === id;
    }) [0];
  }
}
