import { Component, OnInit } from '@angular/core';
import { ConcursoService } from './../concurso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Concurso } from './editar-concurso.model';


@Component({
  selector: 'app-editar-concurso',
  templateUrl: './editar-concurso.component.html',
  styleUrls: ['./editar-concurso.component.scss']
})
export class EditarConcursoComponent implements OnInit {
  id: number;
  concurso: Concurso;
  erroCampoNulo: String;
  constructor(private concursoService: ConcursoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.concurso = new Concurso();
    this.id = this.route.snapshot.params['id'];
    this.buscar(this.id);

  }
  buscar(id: number) {
    return this.concursoService.buscar(this.id).subscribe(resposta => {

      this.concurso = resposta;
    });
  }
  atualizar(concurso: Concurso) {
    this.concursoService.atualizar(concurso.id, concurso).subscribe(() => {
      this.router.navigate(['/concursos']);
      alert(`O concurso ${this.concurso.nome} foi salvo com sucesso`);
    },
      error => {
        this.erroCampoNulo = error.error;
      }
    );

  }
}
