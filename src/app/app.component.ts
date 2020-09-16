import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ten';
  name = 'Lesley';
  getCoolnessFactor() {
    return 'Super Cool';
  }
  getName() {
    return this.name;
  }
  obj = {
    firstName: 'Harry',
    lastName: 'Potter'
  }
  arr = ['Ron', 'Hermione'];
  siteUrl = window.location.href;
}
