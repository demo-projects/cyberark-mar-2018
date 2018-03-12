import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[caClickAndStop]'
})
export class ClickAndStopDirective {
  @Output() caClickAndStop = new EventEmitter<MouseEvent>();
  constructor() { }

  @HostListener('click', ['$event'])
  handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.caClickAndStop.emit(e);
  }
}
