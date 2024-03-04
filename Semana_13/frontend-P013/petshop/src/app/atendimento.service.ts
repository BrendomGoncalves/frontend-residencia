import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Atendimento {
  id?: number;
  cliente: string;
  pet: string;
  tipoServico: string;
  data: Date;
}

@Injectable({
  providedIn: 'root'
})

export class AtendimentoService {
  private apiUrl = 'http://localhost:3000/atendimentos'; // URL do backend

  constructor(private http: HttpClient) {}

  cadastrarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.apiUrl, atendimento);
  }

  listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(this.apiUrl);
  }

  editarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    const url = `${this.apiUrl}/${atendimento.id}`;
    return this.http.put<Atendimento>(url, atendimento);
  }

  detalharAtendimento(id: number): Observable<Atendimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Atendimento>(url);
  }
}
