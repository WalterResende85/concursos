
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ConcursoFormComponent } from './concurso-form/concurso-form.component';
import { ConcursoRoutingModule } from './concurso-routing.module';
import { ConcursosListagemComponent } from './concursos-listagem/concursos-listagem.component';


@NgModule({
    declarations: [
        ConcursosListagemComponent,
        ConcursoFormComponent,
    ],
    imports: [
        CommonModule,
        ConcursoRoutingModule,
        FormsModule,
        NgxMaskModule.forRoot()
    ],
    providers: [
        NgxMaskModule
    ],

})
export class ConcursoModule { }
