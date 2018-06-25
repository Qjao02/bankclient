import { TestBed, inject } from '@angular/core/testing';

import { NovoAdministradorFormService } from './novo-administrador-form.service';

describe('NovoAdministradorFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoAdministradorFormService]
    });
  });

  it('should be created', inject([NovoAdministradorFormService], (service: NovoAdministradorFormService) => {
    expect(service).toBeTruthy();
  }));
});
