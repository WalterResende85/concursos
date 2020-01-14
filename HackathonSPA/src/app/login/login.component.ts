import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  classBody: any;
  constructor() { }

  ngOnInit() {

  }
  public logar() {

  }
  public cadastrar() {

  }

  public login() {
    this.classBody = "sign-in-js";
  }
  public formCadastro() {
    this.classBody = "sign-up-js";
  }

}


