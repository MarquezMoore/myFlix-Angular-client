import { Component, OnInit } from '@angular/core';

// Custom Services
import { GetMoviesService } from '../fetch-api-data.service'

// Angular Material Elements 
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    private fetchApiData: GetMoviesService,
    private snackBar: MatSnackBar
  )  { }

  // the following lifecycle hook in called when react in finished creating the component
  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe( result => {
      console.log(result);
      this.movies= result;
      return this.movies;
    }, err => {
      console.log(`getMovies error in MovieCardComponent: ${err}`)
      this.snackBar.open(`App failed to open movies.. Pleas try again later..`, 'OK')
    });
  }

}
