import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: Post;

  constructor(public route:ActivatedRoute, public postService: PostService) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getOne(this.id);
  }

}
