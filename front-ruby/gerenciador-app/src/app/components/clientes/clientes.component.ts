import { Component, OnInit } from '@angular/core';
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
    'nome', 'rg', 'cpf'];
    
  constructor(private ClienteService: ClientesService) {
    console.log(Cliente)
}

ngOnInit(): void {
  this.ClienteService.listar().subscribe(

    p => this.clientes = p
    

  )
  console.log(this.clientes)
}
}
