import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Manutencao } from '../model/Manutencao';

@Injectable({
  providedIn: 'root'
})
export class ManutencoesService {
  URL_MANUTENCOES = 'http://localhost:3000/manutencoes';

  constructor(private  httpClient: HttpClient) {

  }
  listar(): Observable<Manutencao[]>{
    return this.httpClient.get<Manutencao[]>(this.URL_MANUTENCOES);
  }

  inserir(manutencao: Manutencao): Observable<Manutencao>{
    return this.httpClient.post<Manutencao>(this.URL_MANUTENCOES, manutencao)
  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete<Manutencao>(`${this.URL_MANUTENCOES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Manutencao> {
    return this.httpClient.get<Manutencao>(`${this.URL_MANUTENCOES}/${id}`)
  }

  atualizar(manutencao: Manutencao): Observable<Manutencao> {
    return this.httpClient.put<Manutencao>(`${this.URL_MANUTENCOES}/${manutencao.id}`, manutencao);

  }
}
