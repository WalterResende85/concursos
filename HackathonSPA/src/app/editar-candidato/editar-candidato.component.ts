
import { CandidatoService } from '../candidato/candidato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from './editar-candidato.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-candidato',
  templateUrl: './editar-candidato.component.html',
  styleUrls: ['./editar-candidato.component.scss']
})
export class EditarCandidatoComponent implements OnInit {
  id: number;
  candidato: Candidato;
  erroCampoNulo:String

  constructor(private CandidatoService: CandidatoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.candidato = new Candidato();
    this.id = this.route.snapshot.params['id'];
    this.buscar(this.id);

  }

  buscar(id: number) {
    return this.CandidatoService.buscar(id).subscribe(resposta => {
      this.candidato = resposta;
    });
  }

  atualizar() {
    this.CandidatoService.atualizar(this.candidato).subscribe(() =>{
      this.router.navigate(['/candidatos']);
      alert(`O candidato ${this.candidato.nome} foi salvo com sucesso`);
    },
        error => {
        this.erroCampoNulo = error.error;
      }
    
    
    );
  
  }
}
