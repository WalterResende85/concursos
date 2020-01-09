import { TestBed } from '@angular/core/testing';

import { ConcursoCandidatoService } from './concurso-candidato.service';

describe('ConcursoCandidatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcursoCandidatoService = TestBed.get(ConcursoCandidatoService);
    expect(service).toBeTruthy();
  });
});
