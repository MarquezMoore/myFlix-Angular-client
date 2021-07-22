import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

// Cutom Services
import { AppAPI } from '../fetch-api-data.service'

// Angular Material 
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };
  loading: boolean = false;

  constructor(
    private appApi: AppAPI,
    private dialog: MatDialogRef<UserLoginFormComponent>,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public login(): void{
    // show loading 
    console.log('Loading')
    this.loading = true;
    this.appApi.userLogin(this.userData).subscribe( result => {
      // hide loading
      console.log('Done')
      this.loading = false;
      this.dialog.close();
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      console.log(result);

      this.router.navigate(['movies']);
    }, err => {
      this.loading = false;
      console.log(err);
      this.snackBar.open(`Login error occured...`, 'OK');
    });
  }

}
