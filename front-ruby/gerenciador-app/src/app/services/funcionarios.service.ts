import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Funcionario } from '../model/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  URL_FUNCIONARIOS = 'http://localhost:3000/funcionarios';

  constructor(private  httpClient: HttpClient) {

  }
  listar(): Observable<Funcionario[]>{
    return this.httpClient.get<Funcionario[]>(this.URL_FUNCIONARIOS);
  }

  inserir(funcionario: Funcionario): Observable<Funcionario>{
    return this.httpClient.post<Funcionario>(this.URL_FUNCIONARIOS, funcionario)
  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete<Funcionario>(`${this.URL_FUNCIONARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(`${this.URL_FUNCIONARIOS}/${id}`)
  }

  atualizar(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(`${this.URL_FUNCIONARIOS}/${funcionario.id}`, funcionario);

  }
}
