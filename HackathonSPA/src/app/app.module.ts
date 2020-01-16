
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CandidatoFormComponent } from './candidato/candidato-form/candidato-form.component';
import { CandidatoService } from './candidato/candidato.service';
import { CandidatosListagemComponent } from './candidato/candidatos-listagem/candidatos-listagem.component';
import { ConcursoCandidatoListagemComponent } from './concurso-candidato/concurso-candidato-listagem/concurso-candidato-listagem.component';
import { ConcursoFormComponent } from './concurso/concurso-form/concurso-form.component';
import { ConcursoService } from './concurso/concurso.service';
import { ConcursosListagemComponent } from './concurso/concursos-listagem/concursos-listagem.component';
import { EditarCandidatoComponent } from './editar-candidato/editar-candidato.component';
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { CandidatoRoutingModule } from './candidato/candidato-routing.module';
import { ConcursoRoutingModule } from './concurso/concurso-routing.module';
import { ConcursoCandidatoRoutingModule } from './concurso-candidato/concuros-candidato-routing.module';


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
    CandidatoRoutingModule,
    ConcursoRoutingModule,
    ConcursoCandidatoRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    CandidatoService,
    ConcursoService,    
    AuthService,
    AuthGuard,
    NgxMaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
