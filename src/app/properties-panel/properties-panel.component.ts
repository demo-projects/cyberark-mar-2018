import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { ElementProperties, TAGS } from '../types/element-properties.types';

@Component({
  selector: 'ca-properties-panel',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="properties">
  {{ time | timeAgo }}

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
        (input)="changeProperties.emit({ text: textInput.value })"
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
  counter = 0;
  tags = TAGS;
  time = new Date();
  constructor() {
  }
  // constructor(ngZone: NgZone, changeDetectorRef: ChangeDetectorRef) {
  //   ngZone.runOutsideAngular(() => {
  //     setInterval(() => {
  //       this.counter++;
  //       if (this.counter % 10 === 0) {
  //         changeDetectorRef.detectChanges();
  //       }
  //     }, 100);
  //   });
  // }

  ngOnInit() {

  }

  // currentTime() {
  //   console.count('change detection');
  //   return 'moshe';
  // }
}
