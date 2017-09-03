import { Component, Input, OnChanges } from 'angular-ts-decorators';

// get styles
import './booksingle.component.scss'

// get template
const template = require('./booksingle.component.html');

@Component({
  selector: 'book',
  template
})
export class BookSigleComponent implements OnChanges {
  @Input() bundles: object[];
  @Input() book: object;

  isShownClass: boolean = false;

  ngOnChanges(changes: any) {
    if(changes.book){
      this.isShownClass = true;
    }
  }

}