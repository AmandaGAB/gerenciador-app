import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent {
  cliente: Cliente = new Cliente();
  operacaoCadastro = true;


  constructor(private ClienteService: ClientesService,private rotaAtual: ActivatedRoute, private roteador: Router, 
    private mensagemService: MensagensService) {
    this.cliente = new Cliente();

    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.ClienteService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.cliente = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirCliente(): void{

    if(this.cliente.id) {
      this.ClienteService.atualizar(this.cliente).subscribe(_cliente => {
        this.mensagemService.success('Dados atualizados com Sucesso!');

        this.roteador.navigate(['/clientes']);
      })
      

    } else {
      this.ClienteService.inserir(this.cliente).subscribe(_cliente => {
        this.mensagemService.success('Cliente cadastrado com Sucesso!');
        this.roteador.navigate(['/clientes']);
      })
      this.cliente = new Cliente();

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
