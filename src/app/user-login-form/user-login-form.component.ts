import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

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

  @Input() userData = { Username: '', Password: '' };

  constructor(
    private fetchApiData: UserLoginService,
    private dialog: MatDialogRef<UserLoginFormComponent>,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public login(): void{
    // show loading 
    console.log('Loading')
    this.fetchApiData.userLogin(this.userData).subscribe( result => {
      // hide loading
      console.log('Done')
      this.dialog.close();
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      console.log(result);

      this.router.navigate(['movies']);
    }, err => {
      console.log(err);
      this.snackBar.open(`Login error occured...`, 'OK');
    });
  }

}
