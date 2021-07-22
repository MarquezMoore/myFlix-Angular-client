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

  constructor(
    private apiApi: AppAPI,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isFavorite()
  }
  
  
  public isFavorite(): boolean {
    if( this.favoriteIds.includes(this.movie._id)){
      this.isFav = true;
    }
    return this.isFav;
  }

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
  
  public openGenreDetails(name: string, description: string): void {
    this.dialog.open(GenreDetailsComponent, {
      data: {
        name: name,
        description: description,
      },
      width: '500px'
    });
  }
  
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
  public removeFromFavorites(movieID: string): void {
    const username = JSON.parse(localStorage.getItem('user')!).username;

    this.apiApi.removeFromFavorites(username, movieID).subscribe( result => {
      this.isFav = false;
      this.snackBar.open(`${this.movie.title} was removed from favorites.`, 'OK')
    }, err => {
      console.log(err)
    })
  }
  public closeDialog(): void {
    this.dialog.closeAll();
  }
}


