import { NgModule } from 'angular-ts-decorators';

// get root component
import { AppComponent } from './app/app.component';

// get http providers
import { HttpBookService } from './app/services/http.book.service';
import { HttpErrHandler } from './app/services/http.err.handler';

// get angular module config
import { config, run } from './app.config-and-run'

// get app styles
import 'angular-material/angular-material.scss';
import './sass/main.scss';

// get all components by one module (see 'app' folder)
import { TestAppModule } from './app/app.module';

// get static files to deploy to prod bundle

// Uncomment and rename h.taccess to .htaccess if you use Apache
// require("static-loader?!./.htaccess?output=.htaccess");

export interface IComponentState extends ng.ui.IState {
  state: string;
  selector: string;
  component?: any;
  views?: { [name: string]: IComponentState };
  resolve?: any;
  bindings?: any;
}

@NgModule({
  id: 'AppModule',
  imports: [
    'ui.router',
    'ngSanitize',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngMessages',
    TestAppModule
  ],
  declarations: [
    AppComponent
  ],
  config: config,
  run: run,
  providers: [
    HttpBookService,
    HttpErrHandler
  ]
})
export class AppModule {}



