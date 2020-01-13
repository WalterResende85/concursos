import { CandidatoService } from './../candidato.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidato } from './../editar-candidato/editar-candidato.model';
@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {
  candidato: any;
  erroCampoNulo: String;
  CandidatoCadastrado: String;
  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.candidato = {};
  }
  salvar() {
    this.candidatoService.salvar(this.candidato).subscribe(data => {
      this.router.navigate(['/candidatos']);
      alert(`O candidato ${this.candidato.nome} foi salvo com sucesso`);
    },
      error => {
        debugger
        this.erroCampoNulo = error.error;

      }

    );

  }


}
