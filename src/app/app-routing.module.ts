import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImoveisListComponent } from './components/imoveis/imoveis-list/imoveis-list.component';
import { NavComponent } from './components/nav/nav.component';
import { PessoasListComponent } from './components/pessoas/pessoas-list/pessoas-list.component';
import { VendasListComponent } from './components/vendas/vendas-list/vendas-list.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'vendas', component: VendasListComponent},
      {path: 'pessoas', component: PessoasListComponent},
      {path: 'imoveis', component: ImoveisListComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
