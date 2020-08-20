import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { MoreInfoComponent } from './more-info/more-info.component';
import { TableBillComponent } from './table-bill/table-bill.component';
import { AddBillComponent } from './add-bill/add-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    MoreInfoComponent,
    TableBillComponent,
    AddBillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
