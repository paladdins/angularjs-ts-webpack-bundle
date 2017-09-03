import { Component, Input, OnChanges } from 'angular-ts-decorators';

// get styles
import './err.component.scss'

// get template
const template = require('./err.component.html');


// This component shows the error page
@Component({
  selector: 'not-found',
  template
})
export class NotFoundComponent implements OnChanges {
  @Input() errNumber: number;

  ngOnChanges(changes: any){

  }

}