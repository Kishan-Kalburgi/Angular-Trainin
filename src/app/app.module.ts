import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { SubHeading2Component } from './sub-heading2/sub-heading2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SideBarComponent,
    SubHeadingComponent,
    SubHeading2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
