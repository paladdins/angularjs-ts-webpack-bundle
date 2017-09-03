/* This is an app agregator that 
* is exported in order to add to the main app module 
*/

import { NgModule } from 'angular-ts-decorators';

// get components
import { BookListComponent } from './components/book-list/booklist.component';
import { BookSigleComponent } from './components/book-single/booksingle.component';
import { ModelForm } from './components/model-form/modelform.component';
import { NotFoundComponent } from './components/not-found/err.component';

// get directives
import { srcErrDirecitive } from './directives/src-error.directive'
import { srcCheckDirecitive } from './directives/check-img.directive'


@NgModule({
  id: 'TestAppModule',
  declarations: [
    // declare components
    BookListComponent,
    BookSigleComponent,
    NotFoundComponent,
    ModelForm,

    // declare directives
    srcErrDirecitive,
    srcCheckDirecitive
  ],
  providers: []
})
export class TestAppModule {}