import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EditorService } from './editor.service';

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!--<div class="container" caScrollDetect="100" caScrollDetectClassName="my-scroll-class">-->
    <header>
      <a routerLink="/login" routerLinkActive="link-active">Login</a>
      <a routerLink="/editor" routerLinkActive="link-active">Editor</a>
      go to project&nbsp;
      <select #projectIdInput (change)="gotoProject(projectIdInput.value)">
        <option></option>
        <option *ngFor="let projectId of (projectIds$ | async)" [value]="projectId">
          {{ projectId }}
        </option>
      </select>

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
export class AppComponent implements OnInit {
  projectIds$: Observable<number[]>;
  constructor(public editor: EditorService, private router: Router) {}

  ngOnInit() {
    this.projectIds$ = this.editor.getAllProjects().map(projects => projects.map(({ id }) => id));
  }

  gotoProject(projectId) {
    this.router.navigate(['/editor', projectId]);
  }
}
