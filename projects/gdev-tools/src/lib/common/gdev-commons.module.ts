import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdevStopPropagationDirective } from './directives/stop-propagation.directive';
import { GdevListFilterPipe } from './pipes/list-filter.pipe';



@NgModule({
  declarations: [
    GdevStopPropagationDirective,
    GdevListFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GdevStopPropagationDirective,
    GdevListFilterPipe
  ]
})
export class GdevCommonsModule { }
