import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Role } from '../enums/role.enum';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api/auth';
  tokenKey = 'auth_token';
  role: Role | null = null;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken(),
  );
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.initializeRole();
  }

  //sign-in
  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((res) => {
          this.setToken(res.token);
          this.decodeAndStoreRole(res.token);
          this.isAuthenticatedSubject.next(true);
          this.router.navigate(['/home']);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Login failed, please try again'));
        }),
      );
  }

  //sign-out
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  // check if user logged in or not
  isLoggedIn(): boolean {
    return this.hasToken();
  }
  private initializeRole() {
    const token = this.getToken();
    if (token) {
      this.decodeAndStoreRole(token);
    }
  }
  getRole(): Role | null {
    return this.role;
  }
  private decodeAndStoreRole(token: string) {
    try {
      const decode: any = jwtDecode(token);
      this.role = decode.role || null;
    } catch (error) {
      this.role = null;
    }
  }
  private hasToken(): boolean {
    return !!this.getToken();
  }
  //get the jwt token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
