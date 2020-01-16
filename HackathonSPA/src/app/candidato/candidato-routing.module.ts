import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';
import { AuthGuard } from '../guards/auth.guard';

const candidatoRoutes: Routes = [
    {
        path: 'candidatos',
        component: CandidatosListagemComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'cadastrarCandidato',
        component: CandidatoFormComponent,
        canActivate: [AuthGuard]
    }

];
export const CandidatoRoutingModule: ModuleWithProviders = RouterModule.forRoot(candidatoRoutes);