import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcursoCandidatoListagemComponent } from './concurso-candidato/concurso-candidato-listagem/concurso-candidato-listagem.component';
import { EditarCandidatoComponent } from './editar-candidato/editar-candidato.component';
import { EditarConcursoComponent } from './editar-concurso/editar-concurso.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'candidatos', loadChildren: './candidato/candidato.module#CandidatoModule', canActivate: [AuthGuard] },
    { path: 'concursos', loadChildren: './concurso/concurso.module#ConcursoModule', canActivate: [AuthGuard] },
    {
        path: 'editarCandidato/:id',
        component: EditarCandidatoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'editarConcurso/:id',
        component: EditarConcursoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'concursoCandidato/:id',
        component: ConcursoCandidatoListagemComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
