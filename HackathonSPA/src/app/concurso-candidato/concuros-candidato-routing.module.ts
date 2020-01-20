import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConcursoCandidatoListagemComponent } from './concurso-candidato-listagem/concurso-candidato-listagem.component';
import { AuthGuard } from '../guards/auth.guard';



const ConcursoCandidatoRoutes: Routes = [
    {
        path: 'concursoCandidato/:id',
        component: ConcursoCandidatoListagemComponent,
        canActivate: [AuthGuard]
    }


];
export const ConcursoCandidatoRoutingModule: ModuleWithProviders = RouterModule.forRoot(ConcursoCandidatoRoutes);
