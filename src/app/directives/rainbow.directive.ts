import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  constructor() { }
  @HostListener('keyup') changeColor() {
    this.bc = this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
