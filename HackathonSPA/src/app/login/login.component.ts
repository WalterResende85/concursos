import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Candidato } from '../candidato/editar-candidato.model';
import { CandidatoService } from '../candidato/candidato.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToasterService } from 'angular2-toaster';


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
  constructor(private candidatoService: CandidatoService,
    private router: Router,
    private authService: AuthService,
    private toasterService: ToasterService) { }

  ngOnInit() {

  }
  public logar() {
    if (this.candidato.cpf == null || this.candidato.senha == null || this.candidato.senha == "") {
      this.toasterService.pop('error', 'Os campos não podem ser nulos');
    } else {
      this.authService.logar(this.candidato);
    }
  }

  public cadastrar() {
    this.candidatoService.salvar(this.candidato).subscribe(() => {
      this.toasterService.pop('success', `O candidato ${this.candidato.nome} foi salvo com sucesso`);
      this.candidato = new Candidato();
    },
      error => {
        this.toasterService.pop('error', `${error.error}`);
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


