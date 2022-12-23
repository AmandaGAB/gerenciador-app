import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manutencao } from 'src/app/model/Manutencao';
import { ManutencoesService } from 'src/app/services/manutencoes.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-cadastrar-manutencoes',
  templateUrl: './cadastrar-manutencoes.component.html',
  styleUrls: ['./cadastrar-manutencoes.component.scss']
})
export class CadastrarManutencoesComponent {
  manutencao: Manutencao = new Manutencao();
  operacaoCadastro = true;


  constructor(private manutencaoService: ManutencoesService,private rotaAtual: ActivatedRoute, 
    private roteador: Router, 
    private mensagemService: MensagensService) {
    this.manutencao = new Manutencao();

    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.manutencaoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.manutencao = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirManutencao(): void{

    if(this.manutencao.id) {
      this.manutencaoService.atualizar(this.manutencao).subscribe(_manutencao => {
        this.mensagemService.success('Dados atualizados com Sucesso!');

        this.roteador.navigate(['/manutencaos']);
      })
      

    } else {
      this.manutencaoService.inserir(this.manutencao).subscribe(_manutencao => {
        this.mensagemService.success('Manutencao cadastrado com Sucesso!');
        this.roteador.navigate(['/manutencaos']);
      })
      this.manutencao = new Manutencao();

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
