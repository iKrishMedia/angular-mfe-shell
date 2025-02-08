import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getData('posts');
  }
}
