import { routes } from './app/app.routes';
import { IComponentState } from './init'


interface AppRootScope extends ng.IRootScopeService {
  loadingView: boolean
}

// Angular app config
 let config =  (
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: any,
        $resourceProvider: any
        ) => { 
    $urlRouterProvider.otherwise('/error/404');
    provideStates(routes, $stateProvider);
    $locationProvider.html5Mode(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;
}


config.$inject = [
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    '$resourceProvider',
]



// Angular app run
let run = (
            $window: ng.IWindowService, 
            $q: ng.IQService,
            $rootScope: AppRootScope,
            $state: ng.ui.IStateService
        ): void => {
            
    // replace browser Promise to $q in app
    $window.Promise = $q;

}

run.$inject = [
    '$window',
    '$q',
    '$rootScope',
    '$state'
]

function provideStates(states: IComponentState[], $stateProvider: ng.ui.IStateProvider) {
    states.map((config) => {
    const name = config.state;
    const namedState = config.views;
    delete config.state;
    return {name, config};
    }).forEach(state => $stateProvider.state(state.name, state.config));
}


export {config, run};