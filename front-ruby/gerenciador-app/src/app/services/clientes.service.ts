import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/Cliente"
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  URL_CLIENTES = 'http://localhost:3000/clientes';

  constructor(private  httpClient: HttpClient) {

  }
  listar(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTES);
  }

  inserir(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.URL_CLIENTES, cliente)
  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete<Cliente>(`${this.URL_CLIENTES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_CLIENTES}/${id}`)
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_CLIENTES}/${cliente.id}`, cliente);

  }
}
