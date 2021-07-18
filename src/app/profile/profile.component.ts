import { Component, OnInit } from '@angular/core';

// Service 
import { GetUserService } from '../fetch-api-data.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUserData
  }

}
