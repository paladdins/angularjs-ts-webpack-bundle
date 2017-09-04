
/* This service is for working with aggregion api
*    
*  See https://github.com/AggregionPublic/apidocs/blob/master/Distribution/API.md#group-public
*  and https://confluence.aggregion.com/display/UG/Content+public+services
*  for more information
*/

import { Injectable } from 'angular-ts-decorators';

@Injectable('HttpBookService')
export class HttpBookService {

    private resource: any;

        
    // Injecting static
    static $inject = ["$resource"];

    constructor($resource: any ){
        this.resource = $resource;
    }

    public getBooksList(){
        let obj = this.resource('https://ds.aggregion.com/api/public/catalog');
        return obj;
    } 

    public getBookDetail(){
        let obj = this.resource('https://ds.aggregion.com/api/public/catalog/:id', {id: '@id'});
        let bundlesObj = this.getBundleDetail();
        return obj
    } 

    // gets budles' array of the certain book
    public getBundleDetail(){
        let obj = this.resource('https://ds.aggregion.com/api/public/catalog/:id/bundles', {id: '@_id'});
        return obj;
    }
}

