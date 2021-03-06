import { Component, OnInit } from '@angular/core';
import { ConcursoService } from '../concurso/concurso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Concurso } from './editar-concurso.model';

const ID = 'id';
@Component({
  selector: 'app-editar-concurso',
  templateUrl: './editar-concurso.component.html',
  styleUrls: ['./editar-concurso.component.scss']
})

export class EditarConcursoComponent implements OnInit {
  id: number;
  concurso: Concurso;
  erroCampoNulo: string;
  constructor(
    private concursoService: ConcursoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.concurso = new Concurso();
    this.id = this.route.snapshot.params[ID];
    this.buscar(this.id);

  }

  public buscar(id: number) {
    return this.concursoService.buscar(id).subscribe(resposta => {
      this.concurso = resposta;
    });
  }

  public atualizar(concurso: Concurso) {
    if (this.concurso.nome == null || this.concurso.quantidadeVagas == null) {
      alert('Não é possivel cadastrar um concurso com campo nulo');
    }
    if (this.concurso.quantidadeVagas < 1) {
      alert('A quantidade de vagas deve ser maior que 0');
    } else {
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
}
