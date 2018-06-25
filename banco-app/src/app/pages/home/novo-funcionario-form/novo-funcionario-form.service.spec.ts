import { TestBed, inject } from '@angular/core/testing';

import { NovoFuncionarioFormService } from './novo-funcionario-form.service';

describe('NovoFuncionarioFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoFuncionarioFormService]
    });
  });

  it('should be created', inject([NovoFuncionarioFormService], (service: NovoFuncionarioFormService) => {
    expect(service).toBeTruthy();
  }));
});
