import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';
import { Game } from '../model/game.model';
import { CategoryGame } from '../model/category-game.model';
import { User } from '../model/user.model';
import { Author } from '../model/author.model';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // AUTHORS CREATION
  kupoAuthor: Author = { id: 1, login: 'kupo', password: 'kupo', img: '../../assets/img/user.png', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum.' };
  chocoAuthor: Author = { id: 2, login: 'choco', password: 'choco', img: '../../assets/img/user.png', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum.' }

  authors: Author[] = [this.kupoAuthor, this.chocoAuthor];

  // USER CREATION
  user1: User = { id: 3, login: 'user3', password: 'user3', img: '../../assets/img/user.png' };
  user2: User = { id: 4, login: 'user4', password: 'user4', img: '../../assets/img/user.png' };
  user3: User = { id: 5, login: 'user5', password: 'user5', img: '../../assets/img/user.png'};

  // CATEGORIES CREATION
  categories: CategoryGame[] = [
    { id: 1, name: 'MMORPG' }, { id: 2, name: 'FPS' }, { id: 3, name: 'Plateform' },
    { id: 4, name: 'Arcade' }
  ]

  // GAMES CREATIONS
  wow: Game = { id: 1, name: 'World Of Warcraft', img: '../../assets/img/wow_logo.jpg', pegi: 12, categories: [this.categories[0]] }
  theDivision2: Game = { id: 2, name: 'The Division 2', img: '../../assets/img/td2_logo.jpg', pegi: 18, categories: [this.categories[0], this.categories[1]] }

  // COMMENTS CREATION
  comment1: Comment = { id: 1, date: new Date('May 12, 2019 15:30:00'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien.', user: this.user1 };
  comment2: Comment = { id: 2, date: new Date('May 22, 2019 16:40:12'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: this.user2 };
  comment3: Comment = { id: 3, date: new Date('May 22, 2019 16:45:43'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ipsum imperdiet, tristique eros quis, rutrum sapien.', user: this.user3 };



  games: Game[] = [this.wow, this.theDivision2];

  // POSTS CREATIONS
  posts: Post[] = [
    {
      id: 1, title: 'World Of Warcraft is back !', publishingDate: new Date('May 21, 2019 14:30:00'),
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.'],
      star: 4, img: '../../assets/img/wow_classic.jpg', game: this.wow, author: this.kupoAuthor, comments: [this.comment1, this.comment2, this.comment3]
    } as Post,
    {
      id: 2, title: 'The Divion 2: Patch 1.15 released', publishingDate: new Date('May 23, 2019 10:12:00'), paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisi tincidunt lorem venenatis condimentum. Etiam tincidunt imperdiet tincidunt. In hac habitasse platea dictumst. Donec et mi a turpis venenatis tristique sodales vitae enim. Suspendisse et risus libero. Fusce sagittis ante ut libero congue, non facilisis lacus faucibus. In lacinia lorem odio, non porta tellus imperdiet quis. Sed commodo magna nulla, aliquam egestas velit elementum vitae. Proin arcu velit, placerat cursus feugiat nec, vehicula in sem. Mauris quis massa eget erat venenatis feugiat.'],
      star: 3,
      img: '../../assets/img/td2.jpg', game: this.theDivision2, author: this.chocoAuthor, comments: [this.comment1, this.comment3]
    } as Post
  ]

  constructor() { }

  ngOnInit() {
  }


}
