import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* 
  Angular Material Imports
*/
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


// Angular Forms
import { FormsModule } from '@angular/forms';

// Custom Component 
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { GenreDetailsComponent } from './genre-details/genre-details.component';
import { MovieSynopsisComponent } from './movie-synopsis/movie-synopsis.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';

// Routes

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'movies', component: MovieListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'prefix'}
];

@NgModule({

  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieListComponent,
    WelcomePageComponent,
    NavBarComponent,
    ProfileComponent,
    SideNavComponent,
    MovieCardComponent,
    FavoritesListComponent,
    DirectorDetailsComponent,
    GenreDetailsComponent,
    MovieSynopsisComponent,
    UserEditFormComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }


