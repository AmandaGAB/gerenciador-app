import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manutencao } from 'src/app/model/Manutencao';
import { ManutencoesService } from 'src/app/services/manutencoes.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-manutencoes',
  templateUrl: './manutencoes.component.html',
  styleUrls: ['./manutencoes.component.scss']
})
export class ManutencoesComponent {

  manutencoes = Array<Manutencao>();

  displayedColumns: string[] = [
    'dataInicio', 'dataTermino', 'cliente_id', 'funcionario_id', 'status', 'total', 'opções'];
    
  constructor(private manutencoesService: ManutencoesService,
    private roteador: Router,
    private mensagemService: MensagensService) {
    console.log(Manutencao)
}

ngOnInit(): void {
  this.manutencoesService.listar().subscribe(

    p => this.manutencoes = p
    

  )

}
editar(manutencao: Manutencao): void {
  this.roteador.navigate(['manutencoes/cadastrar', manutencao.id])
}
remover( manutencao: Manutencao) : void{
  this.manutencoesService.remover(Number(manutencao.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.manutencoes.findIndex(u => u.id === manutencao.id)
        if(indexUsuarioParaRemover > -1) {
          this.manutencoes.splice(indexUsuarioParaRemover, 1)
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