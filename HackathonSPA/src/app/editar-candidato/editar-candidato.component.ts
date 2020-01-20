
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/editar-candidato.model';

const ID = 'id';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.scss']
})
export class EditarCandidatoComponent implements OnInit {
  id: number;
  candidato: Candidato;
  erroCampoNulo: string;

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.candidato = new Candidato();
    this.id = this.route.snapshot.params[ID];
    this.buscar(this.id);

  }

  public buscar(id: number) {
    return this.candidatoService.buscar(id).subscribe(resposta => {
      this.candidato = resposta;
    });
  }

  public atualizar() {
    this.candidatoService.atualizar(this.candidato).subscribe(() => {
      this.router.navigate(['/candidatos']);
      alert(`O candidato ${this.candidato.nome} foi salvo com sucesso`);
    },
      error => {
        this.erroCampoNulo = error.error;
      }
    );
  }
}
