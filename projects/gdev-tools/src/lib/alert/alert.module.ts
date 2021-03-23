import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaPopupComponent } from './alerta-popup/alerta-popup.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { MaterialModule } from '../shared/material.module';
import { FirebaseModule } from '../shared/firebase.module';



@NgModule({
  declarations: [
    AlertaPopupComponent,
    ErrorPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FirebaseModule
  ],
  entryComponents: [
    AlertaPopupComponent
  ]
})
export class GdevAlertModule { }
