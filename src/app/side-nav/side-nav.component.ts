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
      console.log(consent);
      if( consent ) {
        console.log('Deleting')
        this.appApi.deleteUser(username).subscribe( result => {
          this.snackBar.open('User was successfully deleted.', 'OK', {
            duration: 4000
          })
          this.router.navigate(['welcome']);
        }, err => {
          
          console.log(`deleteUser in SideNavComponent error...`)
        })
      }
  }

  public openEditDialog(): void{
    this.dialog.open(UserEditFormComponent, {
      width: '400px'
    })
  }
}
