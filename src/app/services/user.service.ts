import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import {
  BehaviorSubject,
  from,
  Observable,
  of,
  pipe,
  Subject,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  cacheMap = new Map<number, User[]>();
  private hasMorePagesSubject = new BehaviorSubject<boolean>(true);
  hasMorePages$ = this.hasMorePagesSubject.asObservable();
  limit = 20;

  constructor(private http: HttpClient) {}
  fetchUsers(page: number): Observable<User[]> {
    if (this.cacheMap.has(page)) {
      this.hasMorePagesSubject.next(true);
      return of(this.cacheMap.get(page)!);
    }

    // return from(fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${this.limit}`)
    //   .then(res=>res.json())
    // ).pipe(
    //   tap((data: User[])=>this.cacheMap.set(page, data))
    // );

    return this.http
      .get<
        User[]
      >(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${this.limit}`)
      .pipe(
        tap((data) => {
          this.cacheMap.set(page, data);
          this.hasMorePagesSubject.next(data.length === this.limit);
        }),
      );
  }
}
