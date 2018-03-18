import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';
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
  constructor(public editor: EditorService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.projectId$ = this.activatedRoute.params.map((params) => params.id);
  }

  ngOnInit() {
  }

  save() {
    if (this.activatedRoute.snapshot.params.id) {
      this.editor.update(this.activatedRoute.snapshot.params.id)
        .subscribe(console.log);
    } else {
      this.editor.create()
      .subscribe((data) => {
        this.router.navigate(['/editor', data.id]);
      });
    }
  }

}
