import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concurso } from './editar-concurso/editar-concurso.model';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  concursoUrl = 'http://localhost:8080/concursos'

  constructor(private http: HttpClient) { }

  salvar(concurso: any) {
    return this.http.post(this.concursoUrl, concurso);
  }

  listar() {
    return this.http.get<any[]>(`${this.concursoUrl}`);
  }
  remover(idConcurso: number) {
    return this.http.delete(`${this.concursoUrl}/${idConcurso}`);
  }
  buscar(idConcurso: number): Observable<Concurso> {
    return this.http.get<Concurso>(`${this.concursoUrl}/${idConcurso}`);
  }

  atualizar(id: number, concurso: any): Observable<Concurso> {
    debugger
    return this.http.put<Concurso>(`${this.concursoUrl}/${id}`, concurso);
  }
}
