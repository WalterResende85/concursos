import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mostrarMenu: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  public verificarAuteticacao(): boolean {
    return this.authService.candidatoEstaAutenticado();
  }
}
