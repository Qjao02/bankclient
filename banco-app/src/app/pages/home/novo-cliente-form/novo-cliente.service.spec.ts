import { TestBed, inject } from '@angular/core/testing';

import { NovoClienteService } from './novo-cliente.service';

describe('NovoClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoClienteService]
    });
  });

  it('should be created', inject([NovoClienteService], (service: NovoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
