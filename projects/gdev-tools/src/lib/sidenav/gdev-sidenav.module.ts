import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { GdevSidenavComponent } from './gdev-sidenav.component';
import { GdevColorsModule } from '../color/gdev-colors.module';



@NgModule({
  declarations: [
    GdevSidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    GdevColorsModule
  ],
  exports: [
    GdevSidenavComponent
  ]
})
export class GdevSidenavModule { }
