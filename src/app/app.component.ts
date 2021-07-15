// src/app/app.component.ts
import { Component } from '@angular/core';

// Custom Components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

// Angular Material Imports
import { MatDialog } from '@angular/material/dialog';

/* 
  Component Decorator
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/* 
  Component 
*/
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) { }
  // This is the function that will open the dialog when the signup button is clicked  
  openUserRegistrationDialog(): void {
      this.dialog.open(UserRegistrationFormComponent, {
  // Assigning the dialog a width
      width: '280px'
      });
    }
}
