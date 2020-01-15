import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Candidato } from '../candidato/editar-candidato.model';
import { CandidatoService } from '../candidato/candidato.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  classBody: any;
  candidato: Candidato = new Candidato();
  erroCampoNulo: String;
  autenticacao: Boolean = false;
  constructor(private candidatoService: CandidatoService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }
  public logar(){
    this.authService.logar(this.candidato) ;
  }

  public cadastrar() {
    this.candidatoService.salvar(this.candidato).subscribe(() => {

    },
      error => {

      }
    );
  }

  public formlogin() {
    this.classBody = "sign-in-js";
  }
  public formCadastro() {
    this.classBody = "sign-up-js";
  }

}


