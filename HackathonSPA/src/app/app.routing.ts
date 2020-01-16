import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConcursoFormComponent } from './concurso/concurso-form/concurso-form.component';
import { CandidatoFormComponent } from './candidato/candidato-form/candidato-form.component';
import { ConcursosListagemComponent } from './concurso/concursos-listagem/concursos-listagem.component';
import { CandidatosListagemComponent } from './candidato/candidatos-listagem/candidatos-listagem.component';
import { EditarCandidatoComponent } from "./editar-candidato/editar-candidato.component";
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import{ ConcursoCandidatoListagemComponent} from './concurso-candidato/concurso-candidato-listagem/concurso-candidato-listagem.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    },

    { path: 'candidatos',
         component: CandidatosListagemComponent,
         canActivate: [AuthGuard]
    },

    { path: 'cadastrarCandidato',
         component: CandidatoFormComponent,
         canActivate: [AuthGuard]    
    },

    { path: 'editarCandidato/:id',
         component: EditarCandidatoComponent,
         canActivate: [AuthGuard]    
    },

    { path: 'concursos',
         component: ConcursosListagemComponent,
         canActivate: [AuthGuard]
    },

    { path: 'cadastrarConcurso',
         component: ConcursoFormComponent,
         canActivate: [AuthGuard]
    },

    { path: 'editarConcurso/:id',
        component: EditarConcursoComponent,
        canActivate: [AuthGuard]
    },

    { path: 'concursoCandidato/:id',
        component: ConcursoCandidatoListagemComponent,
        canActivate: [AuthGuard]
    },

    { path: 'login', component: LoginComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);