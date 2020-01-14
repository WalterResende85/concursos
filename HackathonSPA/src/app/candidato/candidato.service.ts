import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './editar-candidato.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private cadidatoURL = `${environment.baseUrl}candidatos`;

  constructor(private http: HttpClient) { }

 public salvar(candidato: any) {
    return this.http.post(this.cadidatoURL, candidato);
  }

  public listar(): Observable<any> {
    return this.http.get(`${this.cadidatoURL}`);
  }

  public remover(id:number){
    return this.http.delete(`${this.cadidatoURL}/${id}`);
  }

  public buscar(id: number): Observable<Candidato> {
    return this.http.get<Candidato>(`${this.cadidatoURL}/${id}`);
  }

  public atualizar(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(`${this.cadidatoURL}/${candidato.id}`, candidato);
  }
}
