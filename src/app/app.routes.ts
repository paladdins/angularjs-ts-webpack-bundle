import { IComponentState } from '../init';
import { HttpBookService } from './services/http.book.service';
import { HttpErrHandler } from './services/http.err.handler';

// This const exports for ui-route configuration
export const routes: IComponentState[] = [
    { 
        state: 'home', 
        selector: 'home',
        url: '/', 
        component: 'home' 
    },
    { 
        state: 'booklist', 
        selector: 'book-list',
        url: '/booklist', 
        component: 'bookList',
        resolve: {
            books: [ '$state', (
                    $state: ng.ui.IStateService,
                    HttpBookService: HttpBookService, 
                    HttpErrHandler: HttpErrHandler
            ) => {
                    return HttpBookService.getBooksList().query((data: any) => {
                        return data;
                    }, (error: any) => {
                        HttpErrHandler.handleErr(error.status)
                    })
            }]
       }
    },
    { 
        state: 'booksdetail', 
        selector: 'book',
        url: '/book-detail/:id', 
        component: 'book',
        resolve: {
            book: [ '$stateParams', '$state', (
                $stateParams: ng.ui.IStateParamsService, 
                $state: ng.ui.IStateService,
                HttpBookService: HttpBookService, 
                HttpErrHandler: HttpErrHandler
             ) => {
                return HttpBookService.getBookDetail().get({id: $stateParams.id}, (data: any) => {
                    return data;
                }, (error: any) => {
                    HttpErrHandler.handleErr(error.status)
                })
            }],
            bundles: [ '$stateParams', '$state', (
                $stateParams: ng.ui.IStateParamsService, 
                $state: ng.ui.IStateService,
                HttpBookService: HttpBookService, 
                HttpErrHandler: HttpErrHandler
            ) => {
                return HttpBookService.getBundleDetail().query({id: $stateParams.id}, (data: any) => {
                    return data;
                }, (error: any) => {
                    HttpErrHandler.handleErr(error.status)
                })
            }]
       }
    },
    { 
        state: 'model-form', 
        selector: 'model-form',
        url: '/model-form', 
        component: 'modelForm'
    },
    { 
        state: 'not-found', 
        selector: 'not-found',
        url: '/error/:err', 
        component: 'notFound',
        resolve: {
            errNumber: [ '$stateParams', ($stateParams: ng.ui.IStateParamsService): number => {
                return $stateParams.err;
            }]
        }
    }
];