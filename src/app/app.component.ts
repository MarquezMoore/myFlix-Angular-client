import { Component } from '@angular/core';

// Components metadata
@Component({
  // The select is the tag name that will be used to embed this component (e.g. <app-root></app-root>)
  selector: 'app-root',
  // the templateUrl is the file path for the components html template
  templateUrl: './app.component.html',
  // the templateUrl is the file path for the components styling
  styleUrls: ['./app.component.scss']
})

// Actual component
export class AppComponent {
  title: string = 'myFlix-Angular-client';
}
