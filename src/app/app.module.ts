import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavComponent } from './layouts/nav/nav.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    FooterComponent,
    ContentLayoutComponent,
    NavComponent,
  ],
  imports: [
    //angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //modules
    AuthModule,
    HomeModule,

    //core & shared
    CoreModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
