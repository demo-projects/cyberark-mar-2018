import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { SortPipe } from './sort.pipe';
import { ClickAndStopDirective } from './click-and-stop.directive';
import { ScrollDetectDirective } from './scroll-detect.directive';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe],
  declarations: [FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe]
})
export class SharedModule {}
