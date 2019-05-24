import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';
import { Game } from '../model/game.model';
import { CategoryGame } from '../model/category-game.model';
import { User } from '../model/user.model';
import { Author } from '../model/author.model';
import { Comment } from '../model/comment.model';
import { PostService } from '../services/post.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getAll();
  }


}
