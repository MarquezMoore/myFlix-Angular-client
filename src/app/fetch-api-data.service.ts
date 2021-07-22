import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

/* 
  Table of Contents (Services)
    1.) User Registration 
    2.) User Login
    3.) Get Movies
    4.) Get Director
    5.) Get Genre 
    6.) Get User
    7.) Remove from Favorites
    8.) Add to Favorites
    9.) Edit User
    10.) Delete User
    11.) Delete Movie
*/


// Declaring the api url that will provide data for the client app
const url = 'https://my-fav-flix.herokuapp.com/';


// The following decorator specifies that this services will be available in the root component
@Injectable({
  providedIn: 'root'
})

/* 
  1.) User Registration
*/
export class AppAPI {
  token: string | null = localStorage.getItem('token');
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(`${url}api/users`, userDetails).pipe(
      catchError(this.handleError)
    );
  }
  /* 
    2.) User Login -- post /login
  */
  public userLogin(userData: object): Observable<any> {
    console.log(userData)
    return this.http.post(`${url}login`, userData)
  }
  /* 
    3.) Get Movies
  */
  // API Call
  public getAllMovies(): Observable<any> {
    
    return this.http.get(`${url}api/movies`, 
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`,
        })
      }
    ).pipe(
      catchError(this.handleError)
    );
  }
  /* 
    4.) Get Director -- movies/:title/director
  */
  // API Call
  public getDirector(title: string): Observable<any> {

    return this.http.get(`${url}api/movies/${title}/director`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    5.) Get Genre -- genre/:genre
  */
  // API Call
  public getGenre(genre: string): Observable<any> {
    return this.http.get(`${url}api/genre/${genre}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    6.) Get User -- users/:username
  */
  // API Call
  public getUser(username: string): Observable<any> {
    return this.http.get(`${url}api/users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    7.) Remove From Favorites -- users/:username/:movieID
  */
  // API Call
  public removeFromFavorites(username: string, movieID: string): Observable<any> {
    return this.http.delete(`${url}api/users/${username}/${movieID}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    8.) Add to Favorites -- users/:username/:movieID
  */
   // API Call
   public addToFavorites(username: string, movieID: string): Observable<any> {
    return this.http.put(`${url}api/users/${username}/${movieID}`, {},
      // header options
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    9.) Edit User -- put users/:username
  */
  // API Call
  public editUser(username: string, userData: any): Observable<any> {
    return this.http.put(`${url}api/users/${username}`, userData,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    });
  }
  /* 
    10.) Delete User -- delete users/:username
  */
  // API Call
  public deleteUser(username: string): Observable<any> {
    return this.http.delete(`${url}api/users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }
  /* 
    11.) Delete Movie -- delete users/:username/:movieID
  */
  // API Call
  public deleteMovie(username: string, movieID: string): Observable<any> {
    return this.http.delete(`${url}api/user/${username}/${movieID}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }

  private getToken(): string {
    const token = localStorage.getItem('token')!;
    return token;
  }

  // Error Handeling
  private handleError(error: HttpErrorResponse ): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      `Unable to ... Please try again.`);
  }
}

