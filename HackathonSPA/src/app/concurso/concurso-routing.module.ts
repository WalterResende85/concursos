import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';
import { AuthGuard } from '../guards/auth.guard';

const ConcursoRoutes: Routes = [
    { path: 'concursos',
         component: ConcursosListagemComponent,
         canActivate: [AuthGuard]
    },

    { path: 'cadastrarConcurso',
         component: ConcursoFormComponent,
         canActivate: [AuthGuard]
    },
   
];
export const ConcursoRoutingModule: ModuleWithProviders = RouterModule.forRoot(ConcursoRoutes);