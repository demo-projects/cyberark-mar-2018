import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementProperties } from '../types/element-properties.types';

@Component({
  selector: 'ca-properties-panel',
  template: `
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
  `,
  styles: []
})
export class PropertiesPanelComponent implements OnInit {
  @Input() properties: ElementProperties;
  @Output() changeProperties = new EventEmitter<ElementProperties>();
  constructor() {}

  ngOnInit() {}
}
