import { Component, OnInit } from '@angular/core';

// Angular Material Component
import { MatToolbar } from '@angular/material/toolbar'

import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  /**
   * 
   * @param router 
   */
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * This function navigates user to the {@link MovieListComponent | movie list component}
  */
  public goHome(): void {
    this.router.navigate(['movies']);
  }

  /**
   * This function navigates user to the {@link ProfileComponent | profile component}
  */
  public goToProfile(): void {
    this.router.navigate(['profile'])
  }

  /**
   * This function navigates user to the {@link WelcomeComponent | welcome component}
  */
  public logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }

}
