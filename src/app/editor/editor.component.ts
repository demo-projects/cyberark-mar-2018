import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementProperties } from '../types/element-properties.types';
import { EditorService } from '../editor.service';

@Component({
  selector: 'ca-editor',
  template: `
    <div class="container">
      <ca-elements-navigator></ca-elements-navigator>
      <ca-working-area></ca-working-area>
      <ca-properties-panel
        *ngIf="editor.selectedElementIndex !== null"
        [properties]="editor.elements[editor.selectedElementIndex]"
        (changeProperties)="editor.setProperties($event)"
      ></ca-properties-panel>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 1000px }`
  ]
})
export class EditorComponent implements OnInit {

  constructor(public editor: EditorService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.editor.loadProject(params.id);
      } else {
        this.editor.reset();
      }
    })
  }

}
