import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Equipamento } from '../model/Equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {
  URL_EQUIPAMENTOS = 'http://localhost:3000/equipamentos';

  constructor(private  httpClient: HttpClient) {

  }
  listar(): Observable<Equipamento[]>{
    return this.httpClient.get<Equipamento[]>(this.URL_EQUIPAMENTOS);
  }

  inserir(equipamento: Equipamento): Observable<Equipamento>{
    return this.httpClient.post<Equipamento>(this.URL_EQUIPAMENTOS, equipamento)
  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete<Equipamento>(`${this.URL_EQUIPAMENTOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Equipamento> {
    return this.httpClient.get<Equipamento>(`${this.URL_EQUIPAMENTOS}/${id}`)
  }

  atualizar(equipamento: Equipamento): Observable<Equipamento> {
    return this.httpClient.put<Equipamento>(`${this.URL_EQUIPAMENTOS}/${equipamento.id}`, equipamento);

  }
}
