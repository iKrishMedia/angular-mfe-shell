import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/interfaces/album.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums$!: Observable<Album[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.albums$ = this.apiService.getData('albums');
  }
}
