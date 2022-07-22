import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TableRegionComponent } from './table-region/table-region.component';
import { TableDepartementComponent } from './table-departement/table-departement.component';
import { HeaderComponent } from './header/header.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TableRegionComponent,
    TableDepartementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

