import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdevColorDirective } from './directives/color.directive';
import { GdevRandomBackgroudDirective } from './directives/random-background.directive';



@NgModule({
  declarations: [
    GdevColorDirective,
    GdevRandomBackgroudDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GdevColorDirective,
    GdevRandomBackgroudDirective
  ]
})
export class GdevColorsModule { }
