import { Component, OnInit } from '@angular/core';
import { ConcursoService } from '../concurso.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Concurso } from '../../editar-concurso/editar-concurso.model';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-concurso-form',
  templateUrl: './concurso-form.component.html',
  styleUrls: ['./concurso-form.component.scss']
})
export class ConcursoFormComponent implements OnInit {
  concurso: Concurso = new Concurso();
  erroCampoNulo: string;
  constructor(
    private concursoService: ConcursoService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {

  }
  public salvar() {
    if (this.concurso.nome == null || this.concurso.quantidadeVagas == null) {
      this.toasterService.pop('error', 'Não é possivel cadastrar um concurso com campo nulo');
    }
    if (this.concurso.quantidadeVagas < 1) {
      this.toasterService.pop('error', 'A quantidade de vagas deve ser maior que 0');
    } else {
      this.concursoService.salvar(this.concurso).subscribe(() => {
        this.router.navigate(['/concursos']);
        this.toasterService.pop('success', `O concurso ${this.concurso.nome} foi salvo com sucesso`);
      },
        error => {
          this.toasterService.pop('error', `${error.error}`);
        }
      );
    }
  }

}
