import { Injectable } from 'angular-ts-decorators';


// This service is for handling errors and redirecting to the error page
@Injectable('HttpErrHandler')
export class HttpErrHandler {

    
    // Injecting static
    static $inject = ["$state"];

    constructor(private $state: ng.ui.IStateService) {}

    public handleErr(errN: number) {
        this.$state.go('not-found', {err: errN});
    }
}

