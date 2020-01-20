import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConcursoService {
  private concursoURL = `${environment.baseUrl}concursos`;
  constructor(private http: HttpClient) { }

  public salvar(concurso: any) {
    return this.http.post(this.concursoURL, concurso);
  }

  public listar(): Observable<any> {
    return this.http.get(`${this.concursoURL}`);
  }
  public remover(idConcurso: number) {
    return this.http.delete(`${this.concursoURL}/${idConcurso}`);
  }
  public buscar(idConcurso: number): Observable<any> {
    return this.http.get(`${this.concursoURL}/${idConcurso}`, { observe: 'response' });
  }

  public atualizar(id: number, concurso: any): Observable<any> {
    return this.http.put(`${this.concursoURL}/${id}`, concurso, { observe: 'response' });
  }
}
