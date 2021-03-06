import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
