import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { TAGS } from '../types/element-properties.types';
import { NgRedux } from '@angular-redux/store';
import { addElement } from '../store/actions/editor.actions';

@Component({
  selector: 'ca-elements-navigator',
  template: `
    <div class="properties">
      <a *ngFor="let tag of tags | sort:'DESC'" (click)="addElement(tag)">{{ tag | uppercase }}</a>
    </div>
  `,
  styles: [
    `:host { border-right: 1px solid grey; padding: 10px}`,
    `.properties {
      display: flex;
      flex-direction: column;
    }`,
    `a { cursor: pointer }`
  ]
})
export class ElementsNavigatorComponent implements OnInit {
  tags = TAGS;
  constructor(public store: NgRedux<any>) {}

  ngOnInit() {}
  addElement(tag) {
    this.store.dispatch(addElement(tag));
  }
}
