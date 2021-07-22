// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';

// Custom Components
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';


// Angular Material Imports
import { MatDialog } from '@angular/material/dialog';

/* 
  Component Decorator
*/
@Component({
  selector: 'welocme-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
/** 
  * WelcomePageComponent 
  * This component will use to offer the user a sign in and login option when entering the app
*/
export class WelcomePageComponent implements OnInit{

  constructor(public dialog: MatDialog) { };

  ngOnInit(): void{
  }

  /**
   * This function opens the {@link UserRegistrationFromComponent | registration from dialog}
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '400px'
    });
  }

  /**
   * This function opens the {@link UserLoginFromComponent | login from dialog}
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning the dialog a width
      width: '400px'
    });
  }
}
