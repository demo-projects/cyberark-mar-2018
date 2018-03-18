# CyberarkMar2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

```
$ ng new  cyberark-mar2018  --style scss --prefix ca --routing --inline-style --inline-template
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Cheatsheet

### Angular CLI

$ npm i -g @angular/cli
$ ng help
$ ng new cyberark-mar2018 --style scss --prefix ca --routing --inline-style --inline-template
.angular-cli.json
$ ng generate module <path/to/component-name> -e
$ ng generate component <path/to/directive-name> -e
$ ng generate directive <path/to/module-name> -e
$ ng build (--prod, --env=prod, --target=production)
$ ng test, ng e2e, ng lint
$ npm i -g http-server
$ npm i -g source-map-explorer

## Tools
augury
ngrev
codelyzer (comes with a new Angular project)

### ES6 / ES7 / Typescript

decorators @
spread operator ...
let and const vs. var
() => vs. function

# imports

import { Named } from './my-module'; // export class Named {}
import { Named as Aliased } from './my-module'; // export class Named {}
import Default from './my-module'; // export default class Whatever {}
import Default as Alias from './my-module'; // export default class Whatever {}
import \* as All from './my-module'; // export default class Whatever {}

## TSC + NPM Playground:
* https://github.com/demo-projects/tsc-playground
* npm i -g typescript
* tsc index.ts
* tsc --init
* tsconfig.json - rootDir, outDir
* @Component - decorator
* npm i -g @angular/compiler
* npm i -g @angular/compiler-cli
* ngc

## Router
Read about history API

# Course (planned) Agenda

## Reading Material

* Webpack
* NPM
* Typescript

- Day 1

  * Intro
  * Component Concepts
  * Bindings
  * Component hierarchy, Input and Output
  * Angular CLI
  * ngIf and ngFor
  * module system basics
  * content projection

- Day 2
  * Demistify npm & typescript
  * ngSwitch
  * Creating a Custom Directive
  * Change detection & Zones explained
  * Writing Services
  * Dependency Injection
  * Pipes
  * Routing
  * Bonus - dynamic content creation, writing structural directives

- Day 3
  * Http
  * rxJS basics
  * lifecycle hooks
  * Template Forms basic
  * "2 way binding"
  * Reactive Forms, Form Builder
  * Form customization
  * Custom Validations

- Day 4
  * State Management using ngRX / Redux
  * Flux concepts
  * Designing the state
  * Writing actions / reducers
  * Working with immutable data
  * Selectors
  * Middlewares / Effects

### Homework - lesson #1

1. Make the event fire only when going out of the field, or when pressing enter
2. Make different types of elements with a 'tag' property
3. Make it so that not every character invokes changing the property, but after there's a 300ms of "silence"

### Homework - lesson #2
1.
Write a directive called 'scrollDetect' that adds the class 'scrolled' to an element if the window is scrolled down more than 10px, and removes it if the window is scrolled less than 50px.
1.1 allow the user to specify the scroll threshold (50px as default)
1.2. allow the user to also specify the name of the class (scrolled) is default
* This exercise requires research. Open HINTS.md file if you need help.

2. Write a pipe called 'timeAgo' that takes a date object and outputs a string in the format 'X hours ago', 'X minutes ago' (if it's less than an hour), 'X seconds ago' (if it's less than a minute).
2.1 Make it update automatically as time goes by

### Homework - lesson #3
Implement update when we are in /editor/:id

## Check
public interface for decorators
what else can be transferred to HostListener

## TODO
next assignment - use ngZone to make the scroll detect more performant
