import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GdevAuthModule } from 'projects/gdev-auth/src/public-api';
import { AuthExampleComponent } from './components/auth-example/auth-example.component';
import { FirebaseModule } from 'src/shared/firebase.module';
import { MaterialModule } from 'src/shared/material.module';
import { ComunesModule } from 'src/shared/comunes.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MaterialModule,
    ComunesModule,
    GdevAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
