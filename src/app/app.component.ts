import { Component } from 'angular-ts-decorators';

const template = require('./app.component.html');

// This is the root component
@Component({
  selector: 'home',
  template
})
export class AppComponent {
  public docheight: number;
  constructor(){
    this.docheight = window.innerHeight - 40
  }
}