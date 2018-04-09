import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { updateProject, createProject } from '../store/actions/editor.actions';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ca-editor-actions',
  template: `
    <div class="actions">
      <span>{{ projectId$ | async }}</span>
      <button (click)="save()">Save</button>
    </div>
  `,
  styles: [
    `.actions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 5px;
      right: 5px;
      opacity: 0.2;
      padding: 5px;
      background: white;
      border: 1px solid black;
    }`,
    `.actions:hover {
      opacity: 0.9;
    }`
  ]
})
export class EditorActionsComponent implements OnInit {
  projectId$;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: NgRedux<AppState>
  ) {
    this.projectId$ = this.activatedRoute.params.map(params => params.id);
  }

  ngOnInit() {}

  save() {
    const elements = this.store.getState().editor.elements;

    if (this.activatedRoute.snapshot.params.id) {
      this.store.dispatch(
        updateProject(this.activatedRoute.snapshot.params.id, elements)
      );
    } else {
      this.store.dispatch(createProject(elements));
    }
  }
}
