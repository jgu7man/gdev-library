import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { GdevColor } from '../gdev-color.service';

@Directive({
  selector: '[gdev-color]',
})
export class GdevColorDirective implements OnInit {

  @Input() background:  string
  @Input() color:  string

  paletteTypes: string[]
  constructor (
    private el: ElementRef,
    private _color: GdevColor
  ) {
    this.paletteTypes = Object.keys(this._color.ColorPalette)
    this.background = 'bg1'
    this.color = 'primary'
   }

  ngOnInit() {
    this.setColor()
    this.setBackground()
  }

  setColor() {
    if ( this.color ){
      if (this.paletteTypes.includes(this.color)) {
        this.el.nativeElement.style.color = this._color.ColorPalette[ this.color ]
      } else {
        this.el.nativeElement.style.color = this.color
      }
    }
  }

  setBackground() {
    if ( this.background ){
      if (this.paletteTypes.includes(this.background)) {
        this.el.nativeElement.style.background = this._color.ColorPalette[ this.background ]
      } else {
        this.el.nativeElement.style.background = this.background
      }
    }
  }

}
