
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosListagemComponent } from './candidato/candidatos-listagem/candidatos-listagem.component';
import { CandidatoService } from './candidato/candidato.service';
import { ConcursoService } from './concurso/concurso.service';
import { ConcursosListagemComponent } from './concurso/concursos-listagem/concursos-listagem.component';
import { CandidatoFormComponent } from './candidato/candidato-form/candidato-form.component';
import { ConcursoFormComponent } from './concurso/concurso-form/concurso-form.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarCandidatoComponent } from './editar-candidato/editar-candidato.component';
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import { ConcursoCandidatoListagemComponent } from './concurso-candidato/concurso-candidato-listagem/concurso-candidato-listagem.component';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosListagemComponent,
    ConcursosListagemComponent,
    CandidatoFormComponent,
    ConcursoFormComponent,
    HomeComponent,
    HeaderComponent,
    EditarCandidatoComponent,
    EditarConcursoComponent,
    ConcursoCandidatoListagemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    CandidatoService,
    ConcursoService,    
    AuthService,
    NgxMaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
