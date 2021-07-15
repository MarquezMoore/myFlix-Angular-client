import { Component, OnInit, Input } from '@angular/core';

// Cutom Services
import { UserLoginService } from '../fetch-api-data.service'

// Angular Material 
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { username: '', password: '' };

  constructor(
    private fetchApiData: UserLoginService,
    private dialog: MatDialogRef<UserLoginFormComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public userLogin(): void{
    this.fetchApiData.userLogin(this.userData).subscribe( result => {
      this.dialog.close();
      console.log(result);
    }, err => {
      console.log(err);
      this.snackBar.open( err, 'OK');
    });
  }

}
