import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[caScrollDetect]'
})
export class ScrollDetectDirective {
  // @HostBinding('class.scrolled') isScrolled = false;
  @Input() caScrollDetect;
  @Input() caScrollDetectClassName = '';
  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  @HostListener('window:scroll')
  handleScroll() {
    const className = this.caScrollDetectClassName || 'scrolled';
    const threshold = parseInt(this.caScrollDetect || '50', 10);

    this.renderer.setElementClass(
      this.elementRef.nativeElement,
      className,
      window.scrollY > threshold
    );
  }
}
