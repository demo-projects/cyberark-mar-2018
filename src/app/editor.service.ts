import { Injectable } from '@angular/core';
import { ElementProperties } from './types/element-properties.types';

@Injectable()
export class EditorService {

  selectedElementIndex = null;
  elements: ElementProperties[] = [
    {
      tag: 'h1',
      text: 'Cyberark Angular Course',
      color: '#123ABC',
      opacity: 1
    },
    {
      tag: 'h2',
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
  addElement(tag) {
    this.elements = [
      ...this.elements,
      {
        tag: tag,
        text: 'New Element',
        color: '#000000',
        opacity: 1
      }
    ];
    this.selectedElementIndex = this.elements.length - 1;
  }

}
