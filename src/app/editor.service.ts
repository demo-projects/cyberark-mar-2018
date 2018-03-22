import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementProperties } from './types/element-properties.types';
import { Project } from './types/element-properties.types';

@Injectable()
export class EditorService {

  selectedElementIndex = null;
  elements: ElementProperties[] = [
  ];
  constructor(private httpClient: HttpClient) {

  }
  setSelectedIndex(i) {
    this.selectedElementIndex = i;
  }
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

  create() {
    return this.httpClient.post<Project>('http://localhost:3000/projects', {
      elements: this.elements
    });
  }

  update(id) {
    return this.httpClient.put<Project>(`http://localhost:3000/projects/${id}`, {
      elements: this.elements
    });
  }

  reset() {
    this.elements = [];
    this.selectedElementIndex = null;
  }

  loadProject(id) {
    return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`)
      .subscribe((data) => {
        this.elements = data.elements;
      });
  }
  getAllProjects() {
    return this.httpClient.get<Project[]>('http://localhost:3000/projects');
  }

}
