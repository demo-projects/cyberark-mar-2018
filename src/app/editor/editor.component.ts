import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ElementProperties } from '../types/element-properties.types';
import { EditorService } from '../editor.service';
import { NgRedux, select } from '@angular-redux/store';
import { updateProperties, reset } from '../store/actions/editor.actions';
import { AppState } from '../store';

@Component({
  selector: 'ca-editor',
  template: `
    <div class="container">
      <ca-elements-navigator></ca-elements-navigator>
      <ca-working-area></ca-working-area>
      <ca-properties-panel
        *ngIf="selectedElement$ | async"
        [properties]="selectedElement$ | async"
        (changeProperties)="setProperties($event)"
      ></ca-properties-panel>
    </div>
  `,
  styles: [`.container { display: flex; height: 1000px }`]
})
export class EditorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @select(({ editor }: AppState) => {
    return editor.elements[editor.selectedIndex];
  })
  selectedElement$: Observable<ElementProperties>;

  constructor(
    public editor: EditorService,
    private activatedRoute: ActivatedRoute,
    public store: NgRedux<any>
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.editor.loadProject(params.id);
      } else {
        this.store.dispatch(reset());
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setProperties(newProps) {
    this.store.dispatch(updateProperties(newProps));
  }
}
