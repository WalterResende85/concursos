import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';


const ConcursoRoutes: Routes = [
     {
          path: '',
          component: ConcursosListagemComponent,
          canActivate: [AuthGuard]
     },

     {
          path: 'cadastrar',
          component: ConcursoFormComponent,
          canActivate: [AuthGuard]
     },

];
@NgModule({
     imports: [
          RouterModule.forChild(ConcursoRoutes),

     ],
     exports: [RouterModule]
})
export class ConcursoRoutingModule { }