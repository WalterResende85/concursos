
import { Component, OnInit } from '@angular/core';
import { ConcursoService } from '../concurso.service';
import { Concurso } from '../../editar-concurso/editar-concurso.model';
import { ConcursoCandidatoService } from '../../ConcursoCandidato/concurso-candidato.service';
import { Router } from '@angular/router';
import { CandidatoService } from '../../candidato/candidato.service';
import { Candidato } from '../../candidato/editar-candidato.model';
import { ConcursoCandidato } from '../../ConcursoCandidato/concurso-candidato-listagem/concurso-candidato-listagem.model';
import { FormsModule } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-concursos-listagem',
  templateUrl: './concursos-listagem.component.html',
  styleUrls: ['./concursos-listagem.component.scss']
})
export class ConcursosListagemComponent implements OnInit {
  concursos: Observable<Concurso[]>;
  exibirModal: boolean = false;
  exibirModalIncreverCandidato: boolean = false;
  concurso: Concurso;
  concursoCandidato: ConcursoCandidato = new ConcursoCandidato();
  candidatos: Observable<Candidato[]>;
  candidato: Candidato;
  constructor(private concursoService: ConcursoService,
    private concursoCandidatoService: ConcursoCandidatoService,
    private router: Router,
    private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.listar();

  }
  listarCandidatosPorConcurso(id: number) {
    this.router.navigate(['concursoCandidato', id])
  }
  listar() {
    this.concursoService.listar().subscribe(dados => {
      this.concursos = dados;
    });
  }
  atualizar(id: number, concurso: Concurso) {
    this.concursoService.atualizar(id, concurso).subscribe();

  }
  remover() {
    this.concursoService.remover(this.concurso.id).subscribe(() => {
        this.toggleModalExcluir(null);
      });
  }
  toggleModalExcluir(concurso: Concurso) {
    this.concurso = concurso;
    this.exibirModal = !this.exibirModal;

  }
  toggleModalIncreverCandidato(concurso: Concurso) {
    this.listarCandidatos();
    this.concurso = concurso;
    this.exibirModalIncreverCandidato = !this.exibirModalIncreverCandidato;
  }
  listarCandidatos() {
    this.candidatoService.listar().subscribe(dados => {
      this.candidatos = dados;
    });
  }
  InscreverCandidato(idConcurso: number) {
    this.concursoCandidato.idConcurso = idConcurso;
    this.concursoCandidatoService.salvar(this.concursoCandidato).subscribe(() => {
      this.router.navigate(['concursoCandidato', idConcurso])
    });
  }
}
