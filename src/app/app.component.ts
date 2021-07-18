// src/app/app.component.ts
import { Component } from '@angular/core';

/* 
  Component Decorator
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/* 
  Component 
*/
export class AppComponent {
  title = 'myFlix-Angular-client';
}
