import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field/field.component';
import { SortPipe } from './sort.pipe';
import { ClickAndStopDirective } from './click-and-stop.directive';
import { ScrollDetectDirective } from './scroll-detect.directive';
import { TimeAgoPipe } from './time-ago.pipe';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe, FieldErrorComponent],
  declarations: [FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe, FieldErrorComponent]
})
export class SharedModule {}
