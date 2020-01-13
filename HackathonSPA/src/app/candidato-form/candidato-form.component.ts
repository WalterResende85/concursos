import { CandidatoService } from './../candidato.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {
  candidato: any;
  constructor(private candidatoService: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.candidato={};
  }
  salvar(){
    this.candidatoService.salvar(this.candidato).subscribe(()=>{
      this.router.navigate(['/candidatos']);
    }
    
    );
   
  }


}
