import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concurso';
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.router.navigate(['/login']);    
    this.authService.mostrarNavBarEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }
}
