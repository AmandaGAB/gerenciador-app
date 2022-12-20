import { Component } from '@angular/core';
import { Funcionario } from 'src/app/model/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  funcionarios = Array<Funcionario>();

  displayedColumns: string[] = [
    'nome', 'rg', 'cpf'];
    
  constructor(private FuncionarioService: FuncionariosService) {
    console.log(Funcionario)
}

ngOnInit(): void {
  this.FuncionarioService.listar().subscribe(

    p => this.funcionarios = p
    

  )

}
}