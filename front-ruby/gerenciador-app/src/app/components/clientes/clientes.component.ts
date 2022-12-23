import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import {Cliente} from "../../model/Cliente";
import {ClientesService} from "../../services/clientes.service";
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

/*eslint-disable */
export class ClientesComponent implements OnInit{

  clientes = Array<Cliente>();

  displayedColumns: string[] = [
    'nome', 'rg', 'cpf', 'opções'];
    
  constructor(private ClienteService: ClientesService, private roteador: Router,
    private mensagemService: MensagensService) {
    console.log(Cliente)
}

ngOnInit(): void {
  this.ClienteService.listar().subscribe(

    p => this.clientes = p
    

  )
  console.log(this.clientes)
}
editar(cliente: Cliente): void {
  this.roteador.navigate(['clientes/cadastrar', cliente.id])
}
remover( cliente: Cliente) : void{
  this.ClienteService.remover(Number(cliente.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.clientes.findIndex(u => u.id === cliente.id)
        if(indexUsuarioParaRemover > -1) {
          this.clientes.splice(indexUsuarioParaRemover, 1)
          this.mensagemService.success('Cliente removido!');



        }
        this.mensagemService.success('Cliente removido!');
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
