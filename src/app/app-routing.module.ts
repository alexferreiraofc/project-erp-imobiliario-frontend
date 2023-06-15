import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChavesComponent } from "./components/chaves/chaves.component";
import { HomeComponent } from "./components/home/home.component";
import { ImoveisListComponent } from "./components/imoveis/imoveis-list/imoveis-list.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { PessoasListComponent } from "./components/pessoas/pessoas-list/pessoas-list.component";
import { VendasListComponent } from "./components/vendas/vendas-list/vendas-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "vendas", component: VendasListComponent },
      { path: "pessoas", component: PessoasListComponent },
      { path: "chaves", component: ChavesComponent },
      { path: "imoveis", component: ImoveisListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
