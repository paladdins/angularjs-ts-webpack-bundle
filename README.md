# angularjs-ts-webpack-bundle

angularjs-ts-webpack-bundle contains many advantages of symbiosis of cool web extensions:

  - AngularJS Framework
  - TypeScript language
  - Webpack
  - [angularjs-ts-decorators](https://github.com/paladdins/angularjs-ts-decorators/) (to make Angular 1 development very similar to Angular 2 development and to make it more easy to migrate)

# How to start


```sh
$ git clone https://github.com/paladdins/angularjs-ts-webpack-bundle
$ cd angularjs-ts-webpack-bundle
$ npm i
```
To start develope environment:
```sh
$ npm start
```

Then you can go http://localhost:3000

# How to create a build

If you want to build to debug you should use this command:
```sh
$ npm run-script build
```
And to build complete minified production:
```sh
$ npm run-script build:production
```

# Learn about angular-ts-decorators before you start development

 - Go to the [angularjs-ts-decorators](https://github.com/paladdins/angularjs-ts-decorators/)


# App config and run

 - If you want to change `config` or `run` parameters of the AngularJS app you should go `src/app.config-and-run.ts`

# App Routing

 - angularjs-ts-decorators uses ui-router for routes managment and all routes take place in `src/app/app.routes.ts`

# Development components

There is structure similar to Angular 2
If you want to add new component :
 - You should `copy` one of the present component - `this is the easiest way` (In the future I'll create some terminal commands like in `angular cli` to make it even more easy)
 - Follow the best practices naming new component's attributes
 - `Import` your component to `src/app/app.module.ts`
 - Voilà
