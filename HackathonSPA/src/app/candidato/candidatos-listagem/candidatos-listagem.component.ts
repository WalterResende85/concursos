
import { Component, OnInit } from '@angular/core';

import { CandidatoService } from '../candidato.service';
import { Candidato } from '../editar-candidato.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-candidatos-listagem',
  templateUrl: './candidatos-listagem.component.html',
  styleUrls: ['./candidatos-listagem.component.scss']
})
export class CandidatosListagemComponent implements OnInit {

  candidatos: Observable<Candidato[]>;
  exibirModal: boolean = false;
  candidato: Candidato;

  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.listar();

  }

  public listar() {
    this.candidatoService.listar().subscribe(dados => {
      this.candidatos = dados;
    });
  }

  public atualizar(candidato: Candidato) {
    this.candidatoService.atualizar(candidato).subscribe();

  }

  public remover() {
    this.candidatoService.remover(this.candidato.id).subscribe(() => {
      this.toggleModalExcluir(null);
      this.listar();
    });
  }

  public toggleModalExcluir(candidato: Candidato) {
    this.candidato = candidato;
    this.exibirModal = !this.exibirModal;
  }


}
