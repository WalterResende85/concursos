import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConcursoCandidato } from './concurso-candidato-listagem/concurso-candidato-listagem.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcursoCandidatoService {
  concursoCandidatoUrl = 'http://localhost:8080/concursoCandidato'
  constructor(private http: HttpClient) { }

  public salvar(concursoCandidato: any) {
     return this.http.post(this.concursoCandidatoUrl, concursoCandidato);
  }
  public listar() {
    return this.http.get<any[]>(`${this.concursoCandidatoUrl}`);
  }
  public listarCandidatosPorConcurso(idConcurso: number){
    return this.http.get<any[]>(`${this.concursoCandidatoUrl}/${idConcurso}`)
  }
  public remover(idCandidato: number, idConcurso: number) {
    return this.http.delete(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`)
  }
  public buscar(idCandidato: number, idConcurso: number): Observable<ConcursoCandidato> {
    return this.http.get<ConcursoCandidato>(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`)
  }
  public atualizar(idCandidato: number, idConcurso: number, ConcursoCandidato: ConcursoCandidato): Observable<ConcursoCandidato> {
    return this.http.put<ConcursoCandidato>(`${this.concursoCandidatoUrl}/${idCandidato}/${idConcurso}`, ConcursoCandidato);
  }
}
