import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[caScrollDetect]'
})
export class ScrollDetectDirective {
  @Input() caScrollDetect: string;
  @Input() caScrollDetectClassName: string;

  constructor(private renderer: Renderer, private elementRef: ElementRef) {

  }

  @HostListener('window:scroll')
  handleScroll() {
    const threshold = parseInt(this.caScrollDetect || '50', 10);
    if (window.scrollY > threshold) {
      this.renderer.setElementClass(
        this.elementRef.nativeElement,
        this.caScrollDetectClassName,
        true
      );
    } else {
      this.renderer.setElementClass(
        this.elementRef.nativeElement,
        this.caScrollDetectClassName,
        false
      );
    }
  }
}
