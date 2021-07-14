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
const apiUrl = 'https://my-fav-flix.herokuapp.com/api/';
const token = localStorage.getItem('token');

// The following decorator specifies that this services will be available in the root component
@Injectable({
  providedIn: 'root'
})

/* 
  1.) User Registration
*/
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {

    console.log(userDetails);

    return this.http.post(`${apiUrl}users`, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
/* 
  2.) User Login -- post /login
*/
export class UserLoginService {
  constructor(private http: HttpClient) {
  }

  // API Call 
  public userLogin(username: string, password: string): Observable<any> {
    return this.http.post(`${apiUrl}login`, 
      {
        Username: username,
        Password: password
      }
    )
  }
}
/* 
  3.) Get Movies
*/
export class GetMoviesService {
  constructor(private http: HttpClient) {
  }

  // API Call
  public getAllMovies(): Observable<any> {
    return this.http.get(`${apiUrl}users`, 
      {
        headers: new HttpHeaders({
            Authorization: `Bearer ${token}`,
        })
      }
    );
  }

  // Extract the response data ___ Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  4.) Get Director -- movies/:title/director
*/
export class GetDirectorService {
  constructor(private http: HttpClient){
  }
  // API Call
  public getDirector(title: string): Observable<any> {
    return this.http.get(`${apiUrl}movies/${title}/director`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  5.) Get Genre -- genre/:genre
*/
export class GetGenreService {
  constructor(private http: HttpClient){
  }
  // API Call
  public getGenre(genre: string): Observable<any> {
    return this.http.get(`${apiUrl}genre/${genre}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }
  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  6.) Get User -- users/:username
*/
export class GetUserService {
  constructor(private http: HttpClient){
  }

  // API Call
  public getUser(username: string): Observable<any> {
    return this.http.get(`${apiUrl}users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }
  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  7.) Remove From Favorites -- users/:username/:movieID
*/
export class RemoveFromFavoritesService {
  constructor(private http: HttpClient){
  }

  // API Call
  public removeFromFavorites(username: string, movieID: string): Observable<any> {
    return this.http.delete(`${apiUrl}users/${username}/${movieID}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  8.) Add to Favorites -- users/:username/:movieID
*/
export class AddToFavoritesService {
  constructor(private http: HttpClient){
  }

   // API Call
   public addToFavorites(username: string, movieID: string): Observable<any> {
    return this.http.put(`${apiUrl}users/${username}/${movieID}`,
      // header options
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  9.) Edit User -- put users/:username

*/
export class EditUserService {
  constructor(private http: HttpClient){
  }

  // API Call
  public editUser(username: string): Observable<any> {
    return this.http.put(`${apiUrl}users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  10.) Delete User -- delete users/:username
*/
export class DeleteUserService {
  constructor(private http: HttpClient){
  }

  // API Call
  public deleteUser(username: string): Observable<any> {
    return this.http.put(`${apiUrl}users/${username}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}
/* 
  11.) Delete Movie -- delete users/:username/:movieID

*/
export class DeleteMoviesService {
  constructor(private http: HttpClient){
  }

  
  // API Ca;;
  public deleteMovie(username: string, movieID: string): Observable<any> {
    return this.http.delete(`${apiUrl}user/${username}/${movieID}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bear ${token}`
        })
      }
    );
  }

  // Non-typed response extraction
  // private extractResponseData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
}

