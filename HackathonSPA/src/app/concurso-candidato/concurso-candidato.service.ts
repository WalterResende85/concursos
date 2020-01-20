import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConcursoCandidato } from './concurso-candidato-listagem/concurso-candidato-listagem.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConcursoCandidatoService {
  private concursoCandidatoUrl = `${environment.baseUrl}concursoCandidato`;

  constructor(private http: HttpClient) { }

  public salvar(concursoCandidato: any) {
    return this.http.post(this.concursoCandidatoUrl, concursoCandidato);
  }

  public listar() {
    return this.http.get<any[]>(`${this.concursoCandidatoUrl}`);
  }

  public listarCandidatosPorConcurso(idConcurso: number) {
    return this.http.get<any[]>(`${this.concursoCandidatoUrl}/${idConcurso}`);
  }

  public remover(idCandidato: number, idConcurso: number) {
    return this.http.delete(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`);
  }

  public buscar(idCandidato: number, idConcurso: number): Observable<ConcursoCandidato> {
    return this.http.get<ConcursoCandidato>(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`);
  }

  public atualizar(idCandidato: number, idConcurso: number, concursoCandidato: ConcursoCandidato): Observable<ConcursoCandidato> {
    return this.http.put<ConcursoCandidato>(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`, concursoCandidato);
  }
}
