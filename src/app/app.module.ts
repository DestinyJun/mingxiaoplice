import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LoginService} from './shared/login.service';
import {AppComponent} from './app.component';
import {LoginGuard} from './guard/login.guard';
import {LocalStorageService} from './shared/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    LocalStorageService,
    LoginGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
