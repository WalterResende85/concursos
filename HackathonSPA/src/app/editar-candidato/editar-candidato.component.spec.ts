import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCandidatoComponent } from './editar-candidato.component';

describe('EditarCandidatoComponent', () => {
  let component: EditarCandidatoComponent;
  let fixture: ComponentFixture<EditarCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
