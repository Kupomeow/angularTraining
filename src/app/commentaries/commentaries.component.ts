import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.css']
})
export class CommentariesComponent implements OnInit {

  @Input() commentaries: Comment[];
  constructor() { }

  ngOnInit() {
  }

}
