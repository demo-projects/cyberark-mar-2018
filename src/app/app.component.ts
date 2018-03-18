import { Component } from '@angular/core';
import { ElementProperties } from './types/element-properties.types';
import { EditorService } from './editor.service';

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!--<div class="container" caScrollDetect="100" caScrollDetectClassName="my-scroll-class">-->
    <div class="container" caScrollDetect="100" caScrollDetectClassName="my-scroll-class">
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
export class AppComponent {
  constructor(public editor: EditorService) {
  }
}
