import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementProperties } from '../types/element-properties.types';

@Component({
  selector: 'ca-properties-panel',
  template: `
  <div class="properties">
    <ca-field label="Tag">
      <select
        #tagInput
        [value]="properties.tag"
        (change)="changeProperties.emit({ tag: tagInput.value })"
      >
        <option *ngFor="let tag of tags | sort:'DESC'" [value]="tag">{{ tag | uppercase }}</option>
      </select>
    </ca-field>
    <ca-field label="Text">
      <input
        placeholder="Please enter text..."
        #textInput
        [value]="properties.text"
        (change)="changeProperties.emit({ text: textInput.value })"
      />
    </ca-field>
    <ca-field label="Color">
      <input
        type="color"
        #colorInput
        [value]="properties.color"
        (change)="changeProperties.emit({ color: colorInput.value })"/>
    </ca-field>
    <ca-field label="Opacity">
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        #opacityInput
        [value]="properties.opacity"
        (change)="changeProperties.emit({ opacity: opacityInput.value })"/>
    </ca-field>
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

  tags = ['h1', 'h2', 'p', 'div'];
  constructor() {}

  ngOnInit() {}
}
