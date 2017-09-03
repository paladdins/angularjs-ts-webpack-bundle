import { Component, OnChanges, Input } from 'angular-ts-decorators';

// get styles
import './booklist.component.scss'

// get template
const template = require('./booklist.component.html');

@Component({
  selector: 'book-list',
  template
})
export class BookListComponent implements OnChanges {
    @Input() books: object[];

    isShownClass: boolean = false;
    
    ngOnChanges(changes: any) {
        if (changes.books) {
            this.isShownClass = true;
        }
    }
}