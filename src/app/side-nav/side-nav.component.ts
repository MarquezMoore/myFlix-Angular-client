import { Component, OnInit } from '@angular/core';

// Angular Material Components 
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router'

// Cutom Service 
import { AppAPI } from '../fetch-api-data.service';

// Cutom Components
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userDetails: any;

  /**
   * 
   * @param appApi 
   * @param dialog 
   * @param snackBar 
   * @param router 
   */
  constructor(
    private appApi: AppAPI,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDetails()
  }

  /**
   * This funciton submits a get request for the current user
   */
  public getUserDetails(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user')!);
  }

  /**
   * This function submits a delete request for the current user
   */
  public deleteProfile(): void{
    const username: string = JSON.parse(localStorage.getItem('user')!).username; 
    const consent = confirm('Are you sure you want to delete your profile?');
      
      if( consent ) {
        
        this.appApi.deleteUser(username).subscribe( result => {
          localStorage.clear();
          this.router.navigate(['welcome']);

          this.snackBar.open('User was successfully deleted.', 'OK', {
            duration: 4000
          })
        }, err => {
          console.log(`deleteUser in SideNavComponent error...`)
          console.log(err)
          this.snackBar.open('Unable to delete user.', 'OK', {
            duration: 4000
          })
        })
      }
  }

   /**
    * Opens the {@link UserEditFormComponent | user edit form}  
   */
  public openEditDialog(): void{
    this.dialog.open(UserEditFormComponent, {
      width: '400px'
    })
  }
}
