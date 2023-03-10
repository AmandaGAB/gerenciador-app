import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  funcionarios = Array<Funcionario>();

  displayedColumns: string[] = [
    'nome', 'rg', 'cpf', 'opções'];
    
  constructor(private FuncionarioService: FuncionariosService,
    private roteador: Router,
    private mensagemService: MensagensService) {
    console.log(Funcionario)
}

ngOnInit(): void {
  this.FuncionarioService.listar().subscribe(

    p => this.funcionarios = p
    

  )

}
editar(funcionario: Funcionario): void {
  this.roteador.navigate(['funcionarios/cadastrar', funcionario.id])
}
remover( funcionario: Funcionario) : void{
  this.FuncionarioService.remover(Number(funcionario.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.funcionarios.findIndex(u => u.id === funcionario.id)
        if(indexUsuarioParaRemover > -1) {
          this.funcionarios.splice(indexUsuarioParaRemover, 1)
          this.mensagemService.success('Usuario removido!');



        }
        this.mensagemService.success('Usuario removido!');
        this.ngOnInit()
      },
      error=>{
        switch(error.status) {
          case 400:
            this.mensagemService.error("Não foi possível remover. Tente novamente")
            break
          case 404:
            this.mensagemService.error("Não foi possível remover. Tente novamente")
            break
          case 500:
            this.mensagemService.error("Não foi possível fazer a operação com ID informado")
                break
        }
        this.ngOnInit()
      }

  )

}
}