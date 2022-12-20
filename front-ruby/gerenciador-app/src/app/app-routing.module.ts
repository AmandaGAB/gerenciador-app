import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'clientes/cadastrar/:id', component: CadastrarClientesComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
