import { Injectable, EventEmitter } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/editar-candidato.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  candidato: Candidato;
  mostrarmenuEmmiter = new EventEmitter<boolean>();
  candidatoAutenticado: boolean = false;
  constructor(private candidatoService: CandidatoService, private router: Router) { }

  public logar(candidato: Candidato) {
    if (candidato.cpf == null || candidato.senha == null) {
      alert("os campos não podem ser nulos");
    } else {
      this.candidatoService.logar(candidato).subscribe(data => {
        this.candidatoAutenticado = true;

        this.mostrarmenuEmmiter.emit(true);
        
        this.router.navigate(['/home']);
      },
        error => {
          this.candidatoAutenticado = false;

          this.mostrarmenuEmmiter.emit(false);

          this.router.navigate(['/login']);
          alert(`${error.error}`);
        }
      );
    }
  }
  public candidatoEstaAutenticado(){
    return this.candidatoAutenticado;
  }

}
