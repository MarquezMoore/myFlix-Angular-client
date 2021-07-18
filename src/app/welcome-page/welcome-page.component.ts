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
/* 
  Component 
*/
export class WelcomePageComponent implements OnInit{

  constructor(public dialog: MatDialog) { };

  ngOnInit(): void{
  }

  // This is the function that will open the dialog when the signup button is clicked  
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }
}
