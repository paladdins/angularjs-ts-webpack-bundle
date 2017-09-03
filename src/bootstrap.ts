import { AppModule } from './init';

declare var angular: any;

// Bootstrap of the AngularJS app
angular.element(document).ready(() => {
  const appModuleConst = (<any>AppModule).module.name; 
  angular.bootstrap(document, [appModuleConst], {strictDi: true});
});