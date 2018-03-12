import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { SortPipe } from './sort.pipe';
import { ClickAndStopDirective } from './click-and-stop.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FieldComponent, SortPipe, ClickAndStopDirective],
  declarations: [FieldComponent, SortPipe, ClickAndStopDirective]
})
export class SharedModule {}
