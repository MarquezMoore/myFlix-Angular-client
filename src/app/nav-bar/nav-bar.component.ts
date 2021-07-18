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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goHome(): void {
    this.router.navigate(['movies']);
  }

  public goToProfile(): void {
    this.router.navigate(['profile'])
  }

  public logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }

}
