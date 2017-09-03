import { routes } from './app/app.routes';
import { IComponentState } from './init'


interface AppRootScope extends ng.IRootScopeService {
  loadingView: boolean
}

// Angular app config
export const config = (
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

// Angular app run
export const run = (
            $window: ng.IWindowService, 
            $q: ng.IQService,
            $rootScope: AppRootScope,
            $state: ng.ui.IStateService
        ): void => {
            
    // replace browser Promise to $q in app
    $window.Promise = $q;

}

function provideStates(states: IComponentState[], $stateProvider: ng.ui.IStateProvider) {
    states.map((config) => {
    const name = config.state;
    const namedState = config.views;
    delete config.state;
    return {name, config};
    }).forEach(state => $stateProvider.state(state.name, state.config));
}