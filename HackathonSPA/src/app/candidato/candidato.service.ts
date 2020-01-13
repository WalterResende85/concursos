import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../editar-candidato/editar-candidato.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  

  constructor(private http: HttpClient) { }

 public salvar(candidato: any) {
    return this.http.post(environment.candidatosUrl, candidato);
  }

  public listar() {
    return this.http.get<any[]>(`${environment.candidatosUrl}`);
  }

  public remover(id:number){
    return this.http.delete(`${environment.candidatosUrl}/${id}`);
  }

  public buscar(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.candidatosUrl}/${id}`);
  }

  public atualizar(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${environment.candidatosUrl}/${candidato.id}`, candidato);
  }
}
