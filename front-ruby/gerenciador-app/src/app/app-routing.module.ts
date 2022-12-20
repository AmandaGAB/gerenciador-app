import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarFuncionariosComponent } from './components/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'clientes/cadastrar/:id', component: CadastrarClientesComponent},
  {path: 'cadastrarClientes', component: CadastrarClientesComponent},
  {path: 'cadastrarFuncionarios', component: CadastrarFuncionariosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'funcionarios', component: FuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
