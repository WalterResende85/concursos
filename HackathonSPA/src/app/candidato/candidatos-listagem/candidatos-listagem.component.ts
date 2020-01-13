
import { Component, OnInit } from '@angular/core';

import { CandidatoService } from '../candidato.service';
import { Candidato } from '../../editar-candidato/editar-candidato.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidatos-listagem',
  templateUrl: './candidatos-listagem.component.html',
  styleUrls: ['./candidatos-listagem.component.scss']
})
export class CandidatosListagemComponent implements OnInit {

  candidatos: Array<any>;
  exibirModal: boolean = false;
  candidato: Candidato;

  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.listar();

  }

  listar() {
    this.candidatoService.listar().subscribe(dados => {
      this.candidatos = dados;
    });
  }

  atualizar(candidato: Candidato) {
    this.candidatoService.atualizar(candidato).subscribe();

  }

  remover() {
    this.candidatoService.remover(this.candidato.id).subscribe(() => {
      this.toggleModalExcluir(null);
      this.listar();
    });
  }

  toggleModalExcluir(candidato: Candidato) {
    this.candidato = candidato;
    this.exibirModal = !this.exibirModal;
  }


}
