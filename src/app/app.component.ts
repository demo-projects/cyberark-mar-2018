import { Component } from '@angular/core';
import { ElementProperties } from './types/element-properties.types';

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class='container'>
      <h1 [style.color]="properties.color" [style.opacity]="properties.opacity">
        {{ properties.text }}
      </h1>
      <ca-properties-panel
        [properties]="properties"
        (changeProperties)="setProperties($event)"
      ></ca-properties-panel>
    </div>
  `,
  styles: [`.container { text-align: center }`, `input {width: 350px }`]
})
export class AppComponent {
  properties: ElementProperties = {
    text: 'Cyberark Angular Course',
    color: '#123ABC',
    opacity: 1
  };
  setProperties(updatedProps) {
    this.properties = {
      ...this.properties,
      ...updatedProps
    };
  }
}
