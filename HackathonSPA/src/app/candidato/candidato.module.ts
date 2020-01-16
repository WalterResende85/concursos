import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatosListagemComponent } from './candidatos-listagem/candidatos-listagem.component';


@NgModule({
  declarations: [
    CandidatosListagemComponent,
    CandidatoFormComponent,
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    NgxMaskModule
  ],

})
export class CandidatoModule { }