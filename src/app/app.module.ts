import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EditorService } from './editor.service';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { WorkingAreaComponent } from './working-area/working-area.component';
import { ElementsNavigatorComponent } from './elements-navigator/elements-navigator.component';

@NgModule({
  declarations: [AppComponent, PropertiesPanelComponent, WorkingAreaComponent, ElementsNavigatorComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
