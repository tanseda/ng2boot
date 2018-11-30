import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import {HttpClientModule} from "@angular/common/http";
import * as wj from "wijmo/wijmo.angular2.grid";
// import {WjFlexGrid, WjGridModule} from "wijmo/wijmo.angular2.grid";

 @NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //WjGridModule,
    //WjFlexGrid
    //wj
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
