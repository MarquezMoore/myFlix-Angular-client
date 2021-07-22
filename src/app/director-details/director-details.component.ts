import { Component, OnInit, Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.scss']
})
export class DirectorDetailsComponent implements OnInit {

  /**
   * 
   * @param data 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
}
