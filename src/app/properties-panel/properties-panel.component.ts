import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementProperties } from '../types/element-properties.types';

@Component({
  selector: 'ca-properties-panel',
  template: `
  <div class="properties">
    <input
      placeholder="Please enter text..."
      #textInput
      [value]="properties.text"
      (input)="changeProperties.emit({ text: textInput.value })"
    />
    <input
      type="color"
      #colorInput
      [value]="properties.color"
      (change)="changeProperties.emit({ color: colorInput.value })"/>
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      #opacityInput
      [value]="properties.opacity"
      (change)="changeProperties.emit({ opacity: opacityInput.value })"/>
  </div>
  `,
  styles: [
    `:host { border-left: 1px solid grey; padding: 10px}`,
    `input {width: 350px }`,
    `.properties {
      display: flex;
      flex-direction: column;
    }`
  ]
})
export class PropertiesPanelComponent implements OnInit {
  @Input() properties: ElementProperties;
  @Output() changeProperties = new EventEmitter<ElementProperties>();
  constructor() {}

  ngOnInit() {}
}
