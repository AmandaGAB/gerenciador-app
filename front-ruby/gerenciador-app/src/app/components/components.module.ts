import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { CadastrarFuncionariosComponent } from './cadastrar-funcionarios/cadastrar-funcionarios.component';
import { CadastrarEquipamentosComponent } from './cadastrar-equipamentos/cadastrar-equipamentos.component';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    CadastrarClientesComponent,
    CadastrarFuncionariosComponent,
    CadastrarEquipamentosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule,
    MatTabsModule,
    MatListModule
  ]
})
export class ComponentsModule { }
