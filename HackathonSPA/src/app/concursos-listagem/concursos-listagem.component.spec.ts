import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursosListagemComponent } from './concursos-listagem.component';

describe('ConcursosListagemComponent', () => {
  let component: ConcursosListagemComponent;
  let fixture: ComponentFixture<ConcursosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
