import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConcursoFormComponent } from './concurso/concurso-form/concurso-form.component';
import { CandidatoFormComponent } from './candidato/candidato-form/candidato-form.component';
import { ConcursosListagemComponent } from './concurso/concursos-listagem/concursos-listagem.component';
import { CandidatosListagemComponent } from './candidato/candidatos-listagem/candidatos-listagem.component';
import { EditarCandidatoComponent } from "./editar-candidato/editar-candidato.component";
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import{ ConcursoCandidatoListagemComponent} from './ConcursoCandidato/concurso-candidato-listagem/concurso-candidato-listagem.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'candidatos', component: CandidatosListagemComponent },
    { path: 'cadastrarCandidato', component: CandidatoFormComponent },
    { path: 'editarCandidato/:id', component: EditarCandidatoComponent },
    { path: 'concursos', component: ConcursosListagemComponent },
    { path: 'cadastrarConcurso', component: ConcursoFormComponent },
    { path: 'editarConcurso/:id', component: EditarConcursoComponent },
    { path: 'concursoCandidato/:id', component: ConcursoCandidatoListagemComponent },
    { path: 'login', component: LoginComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);