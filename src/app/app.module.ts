import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// para trabalhar com formularios angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// para realizar requisicoes HTTP
import {HttpClientModule} from '@angular/common/http';

// imports de componentes do Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // trabalhar com formularios
    ReactiveFormsModule,
    // requisicoes HTTP
    FormsModule,

    // Imports angular material
    MatButtonModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
