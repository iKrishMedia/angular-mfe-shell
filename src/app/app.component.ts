import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular MFE Shell';
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(() => {
      this.updateMfeWindowToken();
    });
  }
  private updateMfeWindowToken() {
    const token = this.authService.getToken();
    console.log('token set to window:' + token);
    (window as any)['mfeWindowToken'] = token;
  }
}
