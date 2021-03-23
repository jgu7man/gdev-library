import { NgModule } from '@angular/core';
import { GdevAlertModule } from './alert/alert.module';
import { GdevAuthModule } from './auth/gdev-auth.module';
import { GdevCacheModule } from './cache/gdev-cache.module';
import { GdevColorsModule } from './color/gdev-colors.module';
import { GdevCommonsModule } from './common/gdev-commons.module';
import { GdevLoadingModule } from './loading/loading.module';
import { GdevResponsiveModule } from './responsive/gdev-responsive.module';
import { GdevSearchModule } from './search/gdev-search.module';
import { GdevSidenavModule } from './sidenav/gdev-sidenav.module';
import { GdevTextModule } from './text/gdev-text.module';



@NgModule({
  imports: [
  ],
  exports: [
    GdevAlertModule,
    GdevAuthModule,
    GdevCacheModule,
    GdevColorsModule,
    GdevCommonsModule,
    GdevLoadingModule,
    GdevResponsiveModule,
    GdevSearchModule,
    GdevSidenavModule,
    GdevTextModule
  ]
})
export class GdevToolsModule { }
