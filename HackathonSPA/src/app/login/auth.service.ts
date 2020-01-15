import { Injectable, EventEmitter } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/editar-candidato.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  candidato: Candidato;
  mostrarNavBarEmmiter = new EventEmitter<boolean>();

  constructor(private candidatoService: CandidatoService, private router: Router) { }

  public logar(candidato: Candidato) {
    if (candidato.cpf == null || candidato.senha == null) {
      alert("os campos não podem ser nulos");
    } else {
      this.candidatoService.logar(candidato).subscribe(data => {
        this.mostrarNavBarEmmiter.emit(true);
        this.router.navigate(['']);
      },
        error => {
          this.mostrarNavBarEmmiter.emit(false);
          this.router.navigate(['/login']);
          alert(`${error.error}`);
        }
      );
    }
  }

}
