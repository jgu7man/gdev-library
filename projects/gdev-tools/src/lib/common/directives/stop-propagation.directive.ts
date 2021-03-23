import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopPropagation]'
})
export class GdevStopPropagationDirective {

  @HostListener( "click", [ "$event" ] )
  public onClick( event: any ): void {
    event.stopPropagation();
  }

  constructor() { }

}
