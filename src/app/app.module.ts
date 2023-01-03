import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// para trabalhar com formularios angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// para realizar requisicoes HTTP
import { HttpClientModule } from "@angular/common/http";

// imports de componentes do Angular Material
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

// componentes do projeto
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { VendasListComponent } from "./components/vendas/vendas-list/vendas-list.component";
import { PessoasListComponent } from "./components/pessoas/pessoas-list/pessoas-list.component";
import { ImoveisListComponent } from "./components/imoveis/imoveis-list/imoveis-list.component";
import { LoginComponent } from "./components/login/login.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    VendasListComponent,
    PessoasListComponent,
    ImoveisListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDatatableModule,

    // trabalhar com formularios
    ReactiveFormsModule,
    FormsModule,
    // requisicoes HTTP
    HttpClientModule,

    // Imports angular material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
