# CyberarkMar2018

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

```
$ ng new  cyberark-mar2018  --style scss --prefix ca --routing --inline-style --inline-template
```

## run

`ng serve`  
`npm run server`  
Navigate to `http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

# Useful stuff

## Angular CLI

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
redux devtools

## ES6 / ES7 / Typescript

decorators @
spread operator ...
let and const vs. var
() => vs. function

## imports

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

## Redux

Slides:  
[https://www.slideshare.net/AdamKlein7/angular-course-flux-redux](https://www.slideshare.net/AdamKlein7/angular-course-flux-redux)

## Immutable libraries alternatives

[lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
[immutable.js](https://facebook.github.io/immutable-js/)
[immer](https://github.com/mweststrate/immer)

# Course (planned) Agenda

* Day 1

  * Intro
  * Component Concepts
  * Bindings
  * Component hierarchy, Input and Output
  * Angular CLI
  * ngIf and ngFor
  * module system basics
  * content projection

* Day 2

  * Demistify npm & typescript
  * ngSwitch
  * Creating a Custom Directive
  * Change detection & Zones explained
  * Writing Services
  * Dependency Injection
  * Pipes
  * Routing
  * Bonus - dynamic content creation, writing structural directives

* Day 3

  * Http
  * rxJS basics
  * lifecycle hooks
  * Template Forms basic
  * "2 way binding"
  * Reactive Forms, Form Builder
  * Form customization
  * Custom Validations

* Day 4
  * State Management using ngRX / Redux
  * Flux concepts
  * Designing the state
  * Writing actions / reducers
  * Working with immutable data
  * Selectors
  * Middlewares / Effects

# Homework

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

1. Implement update when we are in /editor/:id
2. Implement custom validator
3. Add a project selector to the application header:

* Fetch all projects from the server
* Display select box, the options are project IDs
* When selecting a projectId - navigate to that project (editor/:id)

# What's next

## Read more about

* Angular animations
* Angular universal
* RxJS
* Webpack
* npm
* Typescript

Useful links:
[https://docs.google.com/document/d/1kWWIf1JuPxMRJAKdic_5KgtZLsv25_VCtNu24wDqxq0/edit#](https://docs.google.com/document/d/1kWWIf1JuPxMRJAKdic_5KgtZLsv25_VCtNu24wDqxq0/edit#)

# TODO (for me)

check what else can be transferred to HostListener
next assignment - use ngZone to make the scroll detect more performant
Next course - put styles in external CSS so it saves time
