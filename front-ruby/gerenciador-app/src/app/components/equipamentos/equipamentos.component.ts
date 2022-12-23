import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from 'src/app/model/Equipamento';
import { EquipamentosService } from 'src/app/services/equipamentos.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.scss']
})
export class EquipamentosComponent {

  equipamentos = Array<Equipamento>();

  displayedColumns: string[] = [
    'descricao', 'modelo', 'tipo', 'ID cliente', 'ID manutencao', 'opções'];
    
  constructor(private EquipamentoService: EquipamentosService,
    private roteador: Router,
    private mensagemService: MensagensService) {
    console.log(Equipamento)
}

ngOnInit(): void {
  this.EquipamentoService.listar().subscribe(

    p => this.equipamentos = p
    

  )

}
editar(equipamento: Equipamento): void {
  this.roteador.navigate(['equipamentos/cadastrar', equipamento.id])
}
remover( equipamento: Equipamento) : void{
  this.EquipamentoService.remover(Number(equipamento.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.equipamentos.findIndex(u => u.id === equipamento.id)
        if(indexUsuarioParaRemover > -1) {
          this.equipamentos.splice(indexUsuarioParaRemover, 1)
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