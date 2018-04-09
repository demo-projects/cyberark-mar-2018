import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
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
import { loggerMiddleware } from './store/middlewares/logger.middleware';
import { ApiMiddleware } from './store/middlewares/api.middleware';
import { RouterMiddleware } from './store/middlewares/router.middleware';

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
  providers: [ApiMiddleware, RouterMiddleware],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<any>,
    devTools: DevToolsExtension,
    api: ApiMiddleware,
    router: RouterMiddleware
  ) {
    const enhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      reducer,
      undefined,
      [loggerMiddleware, api.middleware, router.middleware],
      enhancers
    );
  }
}
