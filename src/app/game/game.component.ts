import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
