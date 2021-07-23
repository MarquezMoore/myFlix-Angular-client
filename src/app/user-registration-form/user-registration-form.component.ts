// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// Angular Material
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

// Custom Services
import { AppAPI } from '../fetch-api-data.service';
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  // The Input decorator defines the components input
  @Input() userData = { 
    firstName: '',
    lastName: '',
    username: '', 
    password: '', 
    email: '', 
    birthday: '' };

    loading: boolean = false;

  /**
   * 
   * @param appApi 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(
    public appApi: AppAPI,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  
  ngOnInit(): void {
  }

  /** 
   * This function submits post request for user registration
  */
  registerUser(): void {
    // Start the loading spinner
    this.loading = true;
    this.appApi.userRegistration(this.userData).subscribe((result) => {
      // Stop the loading spinner
      this.loading = false;      
      this.dialogRef.close();// This will close the modal on success!
      // console.log(result);
      this.snackBar.open('Profile successfully created! Please sign in.', 'OK', {
        duration: 4000
      });
    }, err => {
      // Stop the loading spinner
      this.loading = false; 
      this.snackBar.open('Unable to registar user... Please refresh browser and try again.', 'OK', {
        duration: 4000
      });
    });
  }

}
