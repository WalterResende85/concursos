import { CandidatoService } from '../candidato.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidato } from '../editar-candidato.model';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {
  candidato: any;
  erroCampoNulo: string;
  CandidatoCadastrado: string;
  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.candidato = {};
  }
  public salvar() {
    this.candidatoService.salvar(this.candidato).subscribe(data => {
      this.router.navigate(['/candidatos']);
      this.toasterService.pop('success', `O candidato ${this.candidato.nome} foi salvo com sucesso`);
      this.candidato = new Candidato();
    },
      error => {
        this.toasterService.pop('error', `${error.error}`);
      }
    );
  }
}
