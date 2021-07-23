import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router'

// Custom Services
import { AppAPI } from '../fetch-api-data.service'

// Angular Material Elements 
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { DirectorDetailsComponent } from '../director-details/director-details.component'
import { GenreDetailsComponent } from '../genre-details/genre-details.component'
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any = [];
  @Input() favorites: any =[];
  @Input() favoriteIds: any =[];
  isFav: boolean = false;

  /**
   * 
   * @param apiApi 
   * @param snackBar 
   * @param dialog 
   */
  constructor(
    private apiApi: AppAPI,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isFavorite()
  }
  
  /**
   * 
   * This function check all movies and determines if it is a favorite if the current user
   * If it is a favorite, the {@linkcode isFav} variable is updated to true, which will be use to show add or remove button for movie
   * @returns 
   */
  public isFavorite(): boolean {
    if( this.favoriteIds.includes(this.movie._id)){
      this.isFav = true;
    }
    return this.isFav;
  }

  /**
   * 
   * @param name 
   * @param bio 
   * @param deathday 
   * @param birthday 
   * Opens the {@link DirectorDetailsComponent| director details dialog} of current movie
   */
  public openDirectorDetails(name: string, bio: string, deathday: string, birthday: string): void {
    this.dialog.open(DirectorDetailsComponent, {
      data: {
        name: name,
        bio: bio,
        deathday: deathday,
        birthday: birthday,
      },
      width: '500px'
    });
  }
  
  /**
   * 
   * @param name 
   * @param description 
   * Opens the {@link GenreDetailsComponent| genre details dialog} of current movie
   */
  public openGenreDetails(name: string, description: string): void {
    this.dialog.open(GenreDetailsComponent, {
      data: {
        name: name,
        description: description,
      },
      width: '500px'
    });
  }
  
  /**
   * 
   * @param title 
   * @param description 
   * @param genre 
   * @param director 
   * Opens the {@link MovieSynopsisComponent| synopsis dialog} of current movie
   */
  public openSynopsis( title: string, description: string, genre: string, director: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: {
        title: title,
        description: description,
        genre: genre,
        director: director,
      },
      width: '500px'
    });
  }

  /**
   * 
   * @param movieID 
   * Adds respective movies to user's favorites
   */
  public addToFavorites(movieID: string): void {
    const username = JSON.parse(localStorage.getItem('user')!).username;

    this.apiApi.addToFavorites(username, movieID).subscribe( result => {
      this.isFav = true;
      this.snackBar.open(`${this.movie.title} was added to favorites!`, 'OK', {
        duration: 4000
      })
    }, err => {
      console.log(err)
    })
  }

  /**
   * 
   * @param movieID 
   * Removes respective movie from user favorites
   */
  public removeFromFavorites(movieID: string): void {
    const username = JSON.parse(localStorage.getItem('user')!).username;
    
    this.apiApi.removeFromFavorites(username, movieID).subscribe( result => {
      this.isFav = false;
      this.snackBar.open(`${this.movie.title} was removed from favorites.`, 'OK', {
        duration: 4000
      })
    }, err => {
      console.log(err)
    })
  }

  /**
   * Closes the dialog component opened after clicking {@link DirectorDetailsComponent }, {@link MoviesSynopsisComponent}, or {@link GenreDetailsComponent} button on movie card
   */
  public closeDialog(): void {
    this.dialog.closeAll();
  }
}


