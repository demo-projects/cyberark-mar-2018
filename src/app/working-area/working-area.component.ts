// working-area.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ElementProperties } from '../types/element-properties.types';
import { setSelectedIndex } from '../store/actions/editor.actions';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'ca-working-area',
  template: `
    <ca-editor-actions></ca-editor-actions>
    <div class="working-area" (caClickAndStop)="selectElement(null)">
      <div
        class="element"
        *ngFor="let properties of (elements$ | async); let i = index"
        [class.element-selected]="(selectedElementIndex$ | async) === i"
        (caClickAndStop)="selectElement(i)"
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
    `:host { flex-grow: 1; padding: 5px; position: relative }`,
    `.working-area { height: 100% }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class WorkingAreaComponent implements OnInit {
  @select(['editor', 'elements'])
  elements$: Observable<ElementProperties[]>;

  @select(['editor', 'selectedIndex'])
  selectedElementIndex$: Observable<number>;
  constructor(public store: NgRedux<any>) {}

  ngOnInit() {}

  selectElement(i) {
    this.store.dispatch(setSelectedIndex(i));
  }
}
