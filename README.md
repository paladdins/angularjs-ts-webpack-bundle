# angularjs-ts-webpack-bundle

angularjs-ts-webpack-bundle has been built by heart and contains many advantages of symbiosis of cool web extensions:

  - AngularJS Framework
  - TypeScript language
  - Webpack
  - [angularjs-ts-decorators](https://github.com/paladdins/angularjs-ts-decorators/) (to make Angular 1 development very similar to Angular 2 development and to make it easier to migrate)

# How to start

```sh
$ git clone https://github.com/paladdins/angularjs-ts-webpack-bundle
$ cd angularjs-ts-webpack-bundle
$ npm i -d
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

# If your OS is not a Windows

You must go to `package.json` and replace scripts' commands `set` to `export` 
to avoid compilation errors

# Learn about angular-ts-decorators before you start developing

Go to the [angularjs-ts-decorators](https://github.com/paladdins/angularjs-ts-decorators/)
