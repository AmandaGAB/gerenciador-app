import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarEquipamentosComponent } from './components/cadastrar-equipamentos/cadastrar-equipamentos.component';
import { CadastrarFuncionariosComponent } from './components/cadastrar-funcionarios/cadastrar-funcionarios.component';
import { CadastrarManutencoesComponent } from './components/cadastrar-manutencoes/cadastrar-manutencoes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EquipamentosComponent } from './components/equipamentos/equipamentos.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { LoginComponent } from './components/login/login.component';
import { ManutencoesComponent } from './components/manutencoes/manutencoes.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'clientes/cadastrar/:id', component: CadastrarClientesComponent},
  {path: 'cadastrarClientes', component: CadastrarClientesComponent},
  {path: 'clientes/cadastrar/:id', component: CadastrarClientesComponent},
  {path: 'cadastrarFuncionarios', component: CadastrarFuncionariosComponent},
  {path: 'funcionarios/cadastrar/:id', component: CadastrarFuncionariosComponent},
  {path: 'cadastrarManutencoes', component: CadastrarManutencoesComponent},
  {path: 'manutencoes/cadastrar/:id', component: CadastrarManutencoesComponent},
  {path: 'cadastrarEquipamentos', component: CadastrarEquipamentosComponent},
  {path: 'quipamentos/cadastrar/:id', component: CadastrarEquipamentosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'manutencoes', component: ManutencoesComponent},
  {path: 'equipamentos', component: EquipamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
