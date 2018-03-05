import { Component } from '@angular/core';
import { ElementProperties } from './types/element-properties.types';

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
      <div class="container">
        <div class="working-area">
          <h1
            class="element"
            *ngFor="let properties of elements; let i = index"
            [class.element-selected]="selectedElementIndex === i"
            (click)="selectedElementIndex = i"
            [style.color]="properties.color"
            [style.opacity]="properties.opacity"
          >
          {{ properties.text }}
        </h1>
      </div>
      <ca-properties-panel
        *ngIf="selectedElementIndex !== null"
        [properties]="elements[selectedElementIndex]"
        (changeProperties)="setProperties($event)"
      ></ca-properties-panel>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`,
    `.working-area { flex-grow: 1; padding: 5px }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class AppComponent {
  selectedElementIndex = null;
  elements: ElementProperties[] = [
    {
      text: 'Cyberark Angular Course',
      color: '#123ABC',
      opacity: 1
    },
    {
      text: 'March 2018',
      color: '#456DEF',
      opacity: 1
    }
  ];
  setProperties(updatedProps) {
    this.elements[this.selectedElementIndex] = {
      ...this.elements[this.selectedElementIndex],
      ...updatedProps
    };
  }
}
