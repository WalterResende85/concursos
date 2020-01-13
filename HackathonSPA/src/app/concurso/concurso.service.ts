import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concurso } from '../editar-concurso/editar-concurso.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(private http: HttpClient) { }

  salvar(concurso: any) {
    return this.http.post(environment.concursoUrl, concurso);
  }

  listar() {
    return this.http.get<any[]>(`${environment.concursoUrl}`);
  }
  remover(idConcurso: number) {
    return this.http.delete(`${environment.concursoUrl}/${idConcurso}`);
  }
  buscar(idConcurso: number): Observable<Concurso> {
    return this.http.get<Concurso>(`${environment.concursoUrl}/${idConcurso}`);
  }

  atualizar(id: number, concurso: any): Observable<Concurso> {
    debugger
    return this.http.put<Concurso>(`${environment.concursoUrl}/${id}`, concurso);
  }
}
