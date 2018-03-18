import { Component } from '@angular/core';

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!--<div class="container" caScrollDetect="100" caScrollDetectClassName="my-scroll-class">-->
    <header>
      <a routerLink="/login" routerLinkActive="link-active">Login</a>
      <a routerLink="/editor" routerLinkActive="link-active">Editor</a>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [
    `.link-active {
      font-weight: bold;
    }`,
    `header {
      height: 40px;
      display: flex;
      padding: 10px;
      border-bottom: 1px solid grey;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      background: #DDD;
    }`,
    `a{margin-right: 20px}`
  ]
})
export class AppComponent {
  constructor() {
  }
}
