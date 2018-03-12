import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FieldComponent, SortPipe],
  declarations: [FieldComponent, SortPipe]
})
export class SharedModule {}
