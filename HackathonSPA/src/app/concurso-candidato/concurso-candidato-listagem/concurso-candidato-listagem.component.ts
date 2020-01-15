import { Component, OnInit } from '@angular/core';
import { ConcursoCandidatoService } from '../concurso-candidato.service';
import { ConcursoCandidato } from './concurso-candidato-listagem.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Concurso } from '../../editar-concurso/editar-concurso.model';


@Component({
  selector: 'app-concurso-candidato-listagem',
  templateUrl: './concurso-candidato-listagem.component.html',
  styleUrls: ['./concurso-candidato-listagem.component.scss']
})
export class ConcursoCandidatoListagemComponent implements OnInit {
  concursoCandidatos: Array<any>;
  concursoCandidato: ConcursoCandidato = new ConcursoCandidato();
  id: number
  exibirModal: boolean = false;

  constructor(private concursoCandidatoService: ConcursoCandidatoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listarCandidatosPorConcurso(this.id);
  }
  public listarCandidatosPorConcurso(id: number) {
    this.concursoCandidatoService.listarCandidatosPorConcurso(id).subscribe(dados => {
      this.concursoCandidatos = dados;
    })
  }
  public exibirModalNota(concursoCandidato: ConcursoCandidato) {
    this.concursoCandidato = concursoCandidato;
    this.exibirModal = !this.exibirModal;
  }
  public atualizarNota(nota: number) {
    if (nota > 0 && nota <= 100) {
      this.concursoCandidato.nota = nota;
      this.concursoCandidatoService.atualizar(this.concursoCandidato.idCandidato,
        this.concursoCandidato.idConcurso, this.concursoCandidato).subscribe(() => {
          this.exibirModal = !this.exibirModal;
         
        });
    }else{
      alert("nota deve ter valor entre 0 e 100");
    }

  }

}
