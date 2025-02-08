import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos$!: Observable<Photo[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.photos$ = this.apiService.getData('photos');
  }
}
