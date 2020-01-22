import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bc = this.out;
  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.bc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bc = this.out;
  }
}
