import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ToasterService } from 'angular2-toaster';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/editar-candidato.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  candidato: Candidato;
  mostrarmenuEmmiter = new EventEmitter<boolean>();
  candidatoAutenticado = false;
  constructor(
    private candidatoService: CandidatoService,
    private router: Router,
    private toasterService: ToasterService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) { }

  public logar(candidato: Candidato) {

    this.candidatoService.logar(candidato).subscribe(data => {
      this.storage.set('logado', true);
      this.candidatoAutenticado = true;
      this.mostrarmenuEmmiter.emit(true);
      this.toasterService.pop('sucess', `${data.body.nome} logado`);
      this.router.navigate(['/home']);
    },
      error => {
        this.storage.set('logado', false);
        this.candidatoAutenticado = false;
        this.mostrarmenuEmmiter.emit(false);
        this.router.navigate(['/login']);
        this.toasterService.pop('error', `${error.error}`);
      }
    );
  }


  public candidatoEstaAutenticado() {
    this.candidatoAutenticado = this.storage.get('logado') === true;
    return this.candidatoAutenticado;
  }

}
