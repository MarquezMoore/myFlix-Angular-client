import { Component, OnInit, Input } from '@angular/core';

// Service 
import { AppAPI } from '../fetch-api-data.service'

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userData = {username: '', email: '', birthday: '', firstName: '', lastName: ''}

  /**
   * 
   * @param appApi 
   * @param dialog 
   * @param snackBar 
   */
  constructor(
    private appApi: AppAPI,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
}
