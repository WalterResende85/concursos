import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
classBody:any;
  constructor() { }

  ngOnInit() {
  }
login(){
  this.classBody = "sign-in-js";
}
cadastrar(){
  this.classBody = "sign-up-js";
}
}
