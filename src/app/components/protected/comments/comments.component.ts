import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Comment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<Comment[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.comments$ = this.apiService.getData('comments');
  }
}
