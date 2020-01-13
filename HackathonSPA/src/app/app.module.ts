
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';
import { CandidatoService } from './candidato.service';
import { ConcursoService } from './concurso.service';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarCandidatoComponent } from './editar-candidato/editar-candidato.component';
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import { ConcursoCandidatoListagemComponent } from './concurso-candidato-listagem/concurso-candidato-listagem.component';
import { LoginComponent } from './login/login.component';
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
    ReactiveFormsModule
  ],
  providers: [
    CandidatoService,
    ConcursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
