import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;

  constructor(public route:ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
