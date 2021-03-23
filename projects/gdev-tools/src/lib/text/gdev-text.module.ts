import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { GdevCapitalizePipe } from './capitalize.pipe';

// import { CompareValidatorDirective } from './validator.directive';
import { GdevLowecaseDirective } from './directives/lowercase.directive';
import { GdevNormalizeDirective } from './directives/normalize.directive';
import { GdevPreventSpacesDirective } from './directives/prevent-spaces.directive';
import { GdevReactiveTextlineComponent } from './components/gdev-reactive-textline/gdev-reactive-textline.component';

import { GdevReacvtiveDialogboxComponent } from './components/gdev-reacvtive-dialogbox/gdev-reacvtive-dialogbox.component';
import { GdevPwdToggleDirective } from './directives/pwd-toggle.directive';


@NgModule({
  declarations: [
    GdevCapitalizePipe,
    // CompareValidatorDirective,
    GdevLowecaseDirective,
    GdevNormalizeDirective,
    GdevPwdToggleDirective,
    GdevPreventSpacesDirective,
    GdevReactiveTextlineComponent,
    GdevReacvtiveDialogboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    GdevCapitalizePipe,
    GdevPwdToggleDirective,
    // CompareValidatorDirective,
    GdevLowecaseDirective,
    GdevNormalizeDirective,
    GdevReacvtiveDialogboxComponent,
    GdevPreventSpacesDirective,
    GdevReactiveTextlineComponent,
  ]
})
export class GdevTextModule { }
