import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[boldHover]',
  host: {
    '(mouseenter)' : 'textBold()',
    '(mouseleave)' : 'textNormal()'
  }
})
export class BoldHoverDirective {
  private element: HTMLElement;

  constructor(elementRef: ElementRef){
    this.element = elementRef.nativeElement;
  }

  textBold() {
    this.element.style.fontWeight = 'bold';
  }

  textNormal(){
    this.element.style.fontWeight = 'normal';
  }

}
