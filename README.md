# MSXPlayer

🚀 **version 0.0.1**

🌏 [Русский](README.ru.md)

This project was created as a template for a complete application for Media Station X.

This template shows how to organize the API and serve up your content in Media Station X. Also, a template for your site has been added right away. This template can be used for websites with their own movies.

## Install

```bash
git clone https://github.com/ValeraGin/msx-template.git your-project-name
cd your-project-name
npm install
```

## IDE

I personally recommend to use either [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/ru-ru/webstorm/).

## Development server

To start the server, you need to run these commands in different terminals  
Run `npm run start-backend` for a backend-dev server.  
Run `npm run start-web` for a dev web-server.  
Run `npm run start-plugins` for a dev msx-server.  

http://localhost:4200/ - Angular (frontend web app)  
http://localhost:4200/api - NestJS (backend app)  
http://localhost:1234/ - Media Station X Plugins/Data (MSX Scripts)  

Test:
- 1 way: open msx.benzac.de and enter "localhost:4200"
- 2 way: open link http://msx.benzac.de/?start=menu:request:interaction:init@http://localhost:1234/index.html

## Build

Run `ng build %APPNAME%` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test %APPNAME%` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e %APPNAME%` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [MSX Documentation](https://msx.benzac.de/wiki/index.php) [Nx Documentation](https://nx.dev/angular), [Angular Documentation](https://angular.io/), [NestJS](https://nestjs.com/) to learn more.
