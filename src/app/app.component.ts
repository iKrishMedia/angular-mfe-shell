import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('mainContent') mainContentRef!: ElementRef;

  title = 'Angular15';
  users$!: Observable<any[]>;
  currentPage = 1;
  hasMorePages$ = this.userService.hasMorePages$;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    public authService: AuthService,
    private renderer: Renderer2,
  ) {}
  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers() {
    this.users$ = this.userService.fetchUsers(this.currentPage);
  }
  nextPage() {
    this.currentPage++;
    this.loadUsers();
  }
  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
    this.loadUsers();
  }
}
