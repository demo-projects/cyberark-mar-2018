import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EditorService } from './editor.service';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { WorkingAreaComponent } from './working-area/working-area.component';
import { ElementsNavigatorComponent } from './elements-navigator/elements-navigator.component';
import { EditorComponent } from './editor/editor.component';
import { AuthModule } from './auth/auth.module';
import { EditorActionsComponent } from './editor-actions/editor-actions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension
} from '@angular-redux/store';
import { reducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesPanelComponent,
    WorkingAreaComponent,
    ElementsNavigatorComponent,
    EditorComponent,
    EditorActionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgReduxModule
  ],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>, devTools: DevToolsExtension) {
    ngRedux.configureStore(reducer, undefined, [], [devTools.enhancer()]);
  }
}
