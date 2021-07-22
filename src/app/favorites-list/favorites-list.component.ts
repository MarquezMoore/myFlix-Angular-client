import { Component, Input, OnInit } from '@angular/core';

// Angular Material 
import { MatSnackBar } from '@angular/material/snack-bar';

// Cutom Services
import { AppAPI } from '../fetch-api-data.service'

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  @Input() movies: any[] = [];
  @Input() favoriteIds: any[] = [];
  @Input() favorites: any[] = [];

  /**
   * 
   * @param appApi 
   * @param snackBar 
   */
  constructor(
    private appApi: AppAPI,
    private snackBar: MatSnackBar
  )  { }

  // the following lifecycle hook in called when react in finished creating the component
  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
  }

  /**
   * Gets all movies
   */
  public getMovies(): void {
    this.appApi.getAllMovies().subscribe( result => {
      this.movies = result;
      return this.movies;
    }, err => {
      console.log(`getMovies error in MovieCardComponent: ${err}`)
      this.snackBar.open(`App failed to open movies.. Pleas try again later..`, 'OK')
    });
  }

  /**
   * Filter user favorite movies
   */
  public getFavorites(): void {
    const user = JSON.parse(localStorage.getItem('user')!)

    this.appApi.getUser(user.username).subscribe( result => {
      localStorage.setItem('user', JSON.stringify(result));
      // Store IDs of favorite movies -- Used in to generate movieCard 
      this.favoriteIds = result.movies;

      // Store complete favorites movies object
      this.movies.forEach( m => {
        if(result.movies.includes(m._id)) {
          this.favorites.push(m)
        }
        console.log(this.favorites)
      });
      
    }, err => {
      console.log(`Error in getFavorites of FavoritesListComponent: ${err}`);
    });
  }
}
