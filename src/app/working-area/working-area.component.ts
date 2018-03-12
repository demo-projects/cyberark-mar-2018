import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'ca-working-area',
  template: `
    <div class="working-area">
      <div
        class="element"
        *ngFor="let properties of editor.elements; let i = index"
        [class.element-selected]="editor.selectedElementIndex === i"
        (click)="editor.selectedElementIndex = i"
        [style.color]="properties.color"
        [style.opacity]="properties.opacity">
      <ng-container [ngSwitch]="properties.tag">
        <h1 *ngSwitchCase="'h1'">
          {{ properties.text }}
        </h1>
        <h2 *ngSwitchCase="'h2'">
          {{ properties.text }}
        </h2>
        <p *ngSwitchCase="'p'">
          {{ properties.text }}
        </p>
        <div *ngSwitchCase="'div'">
          {{ properties.text }}
        </div>
      </ng-container>
    </div>
`,
  styles: [
    `:host { flex-grow: 1; padding: 5px }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class WorkingAreaComponent implements OnInit {

  constructor(public editor: EditorService) {
  }

  ngOnInit() {
  }

}
