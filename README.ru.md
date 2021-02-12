# MSXPlayer

🚀 **version 0.0.1**

🌏 [English](README.md)

Этот проект был создан как шаблон для полного приложения Media Station X.

Данный шаблон показывает как организовать API и выдачу своего контента в Media Station X. Также добавлен сразу шаблон для вашего сайта. Это шаблон можно использовать для сайтов со своими фильмами.

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
Run `npm run start-msx` for a dev msx-server.  

http://localhost:4200/ - Angular (frontend web app)  
http://localhost:4200/msx - Media Station X (frontend msx app)  
http://localhost:4200/api - NestJS (backend app)  

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
