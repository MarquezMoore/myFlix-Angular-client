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


  constructor(
    public appApi: AppAPI,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  // This us a Angular lifecycle method that is called once this component has recieved all of it data bound inputs
  ngOnInit(): void {
  }

  // This is the function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.loading = true;

    this.appApi.userRegistration(this.userData).subscribe((result) => {
      this.loading = false;
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      console.log(result);
      this.snackBar.open('Profile successfully created! Please sign in.', 'OK', {
        duration: 4000
      });
    }, err => {
      console.log(err);
      this.snackBar.open(err, 'OK');
    });
  }

}