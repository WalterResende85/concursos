import { Component, OnInit } from '@angular/core';
import { ConcursoService } from './../concurso.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-concurso-form',
  templateUrl: './concurso-form.component.html',
  styleUrls: ['./concurso-form.component.scss']
})
export class ConcursoFormComponent implements OnInit {
  concurso: any;
  erroCampoNulo: String;
  constructor(private concursoService: ConcursoService, private router: Router) { }

  ngOnInit() {
    this.concurso = {};
  }
  salvar() {
    this.concursoService.salvar(this.concurso).subscribe(() => {
      this.router.navigate(['/concursos']);
      alert(`O concurso ${this.concurso.nome} foi salvo com sucesso`);
    },
      error => {
        this.erroCampoNulo = error.error;
      }
    );

  }
}
