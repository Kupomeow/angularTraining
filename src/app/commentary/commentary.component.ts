import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
