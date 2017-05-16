import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

//3rd party library
import { LayoutModule } from 'ng2-flex-layout';

import { RouteModule, routingComponents } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//services
import { RootScope } from './shared/root.scope';
import { LoginComponent } from './login/login.component';


@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    routingComponents,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouteModule,
    LayoutModule
  ],
  providers: [ RootScope],
  bootstrap: [AppComponent]
})
export class AppModule { }
