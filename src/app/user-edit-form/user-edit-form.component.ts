import { Component, OnInit, Input } from '@angular/core';

// Cutom Services
import { AppAPI } from '../fetch-api-data.service'

// Angular Material Services
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit {

  @Input() userData = { 
    firstName: '',
    lastName: '',
    username: '', 
    email: '', 
    birthday: '' 
  };
  loading: boolean = false;

  /**
   * 
   * @param appApi 
   * @param dialog 
   * @param snackBar 
   */
  constructor(
    private appApi: AppAPI,
    private dialog: MatDialogRef<UserEditFormComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  /**
   * This function submits an put request to update user
   */
  public editProfile(): void{
    this.loading = true;
    const username = JSON.parse(localStorage.getItem('user')!).username;
   
    this.appApi.editUser(username, this.userData).subscribe( result => {
      this.loading = false;
      this.snackBar.open('User profile successfully updated!', 'OK', {
        duration: 4000
      })
      this.dialog.close();
      // Reload current window
      window.location.reload();
    }, err => {
      this.loading = false;
      this.snackBar.open('Unable to update profile... Try again later.', 'OK', {
        duration: 4000
      })
      console.log('editProfile in UserEditFormComponent error...')
      console.log(err);
    })
  }
}
