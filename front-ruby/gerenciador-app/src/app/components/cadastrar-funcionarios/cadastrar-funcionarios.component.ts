import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-cadastrar-funcionarios',
  templateUrl: './cadastrar-funcionarios.component.html',
  styleUrls: ['./cadastrar-funcionarios.component.scss']
})
export class CadastrarFuncionariosComponent {
  funcionario: Funcionario = new Funcionario();
  operacaoCadastro = true;


  constructor(private FuncionarioService: FuncionariosService,private rotaAtual: ActivatedRoute, private roteador: Router, 
    private mensagemService: MensagensService) {
    this.funcionario = new Funcionario();

    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.FuncionarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.funcionario = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirFuncionario(): void{

    if(this.funcionario.id) {
      this.FuncionarioService.atualizar(this.funcionario).subscribe(_Funcionario => {
        this.mensagemService.success('Dados atualizados com Sucesso!');

        this.roteador.navigate(['/funcionarios']);
      })
      

    } else {
      this.FuncionarioService.inserir(this.funcionario).subscribe(_Funcionario => {
        this.mensagemService.success('Funcionario cadastrado com Sucesso!');
        this.roteador.navigate(['/funcionarios']);
      })
      this.funcionario = new Funcionario();

    }


  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Você deve inserir um email válido';
  //   }
  //
  //   return this.email.hasError('email') ? 'Não é um email válido' : '';
  // }
  logout(): void {
    this.roteador.navigate([''])
    this.mensagemService.error('Você saiu da sessão!');
  }
}
