import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from 'src/app/model/Equipamento';
import { EquipamentosService } from 'src/app/services/equipamentos.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-cadastrar-equipamentos',
  templateUrl: './cadastrar-equipamentos.component.html',
  styleUrls: ['./cadastrar-equipamentos.component.scss']
})
export class CadastrarEquipamentosComponent {
  equipamento: Equipamento = new Equipamento();
  operacaoCadastro = true;


  constructor(private EquipamentoService: EquipamentosService,private rotaAtual: ActivatedRoute, private roteador: Router, 
    private mensagemService: MensagensService) {
    this.equipamento = new Equipamento();

    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.EquipamentoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.equipamento = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirEquipamentos(): void{

    if(this.equipamento.id) {
      this.EquipamentoService.atualizar(this.equipamento).subscribe(_equipamento => {
        this.mensagemService.success('Dados atualizados com Sucesso!');

        this.roteador.navigate(['/equipamentos']);
      })
      

    } else {
      this.EquipamentoService.inserir(this.equipamento).subscribe(_cliente => {
        this.mensagemService.success('Equipamento cadastrado com Sucesso!');
        this.roteador.navigate(['/equipamentos']);
      })
      this.equipamento = new Equipamento();

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

