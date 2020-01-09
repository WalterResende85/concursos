import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoCandidatoListagemComponent } from './concurso-candidato-listagem.component';

describe('ConcursoCandidatoListagemComponent', () => {
  let component: ConcursoCandidatoListagemComponent;
  let fixture: ComponentFixture<ConcursoCandidatoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoCandidatoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoCandidatoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
