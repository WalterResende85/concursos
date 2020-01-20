import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';

const candidatoRoutes: Routes = [
    {
        path: '',
        component: CandidatosListagemComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'cadastrar',
        component: CandidatoFormComponent,
        canActivate: [AuthGuard]
    }

];
@NgModule({
    imports: [
        RouterModule.forChild(candidatoRoutes),
    ],
    exports: [RouterModule]
})

export class CandidatoRoutingModule { }
