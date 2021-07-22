import { Component, OnInit } from '@angular/core';

// Custom Services
import { AppAPI} from '../fetch-api-data.service'

// Angular Material Elements 
import { MatSnackBar } from '@angular/material/snack-bar'



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  favoriteIds: any[] = [];

  constructor(
    private appApi: AppAPI,
    private snackBar: MatSnackBar
  )  { }

  // the following lifecycle hook in called when react in finished creating the component
  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
  }

  public getMovies(): void {
    this.appApi.getAllMovies().subscribe( result => {
      console.log(result);
      this.movies = result;
      return this.movies;
    }, err => {
      console.log(`getMovies error in MovieCardComponent: ${err}`)
      this.snackBar.open(`App failed to open movies.. Pleas try again later..`, 'OK', {
        duration: 4000
      })
    });
  }

  public getFavorites(): void {
    const user = JSON.parse(localStorage.getItem('user')!)

    this.appApi.getUser(user.username).subscribe( result => {
      // console.log(result.movies)
      localStorage.setItem('user', JSON.stringify(result));
      this.favoriteIds = result.movies;
    }, err => {
      console.log(`Error in getUserData of FavoritesListComponent: ${err}`);
    });
  }

}