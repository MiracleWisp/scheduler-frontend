import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {catchError, mergeMap, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public currentUser: User = undefined;
  public currentUserSubject: Subject<User> = new ReplaySubject(1);
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/signup`, user);
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post<Token>(`${environment.apiUrl}/auth/login`, {
      email,
      password
    }).pipe(
      tap((token: Token) => {
        this.setAccessToken(token.token);
      }),
      mergeMap(_ => {
        return this.fetchCurrentUser();
      }),
      tap((user: User) => {
        this.setCurrentUser(user);
      }),
    );
  }

  public logout(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    this.setCurrentUser(undefined);
    this.router.navigate(['/login']);
  }

  public getToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  public fetchUserOnBootstrap(): () => Promise<void> {
    return () => {
      return new Promise<void>((resolve, reject) => {
        this.fetchCurrentUser().subscribe(user => {
          this.setCurrentUser(user);
          resolve();
        });
      });
    };
  }

  private fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/me`).pipe(
      catchError(_ => of(null)),
    );
  }

  private setAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  private setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
    this.currentUser = user;
  }
}

export type Token = {
  token: string;
};
