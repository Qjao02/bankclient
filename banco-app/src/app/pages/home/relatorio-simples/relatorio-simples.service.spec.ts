import { TestBed, inject } from '@angular/core/testing';

import { RelatorioSimplesService } from './relatorio-simples.service';

describe('RelatorioSimplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatorioSimplesService]
    });
  });

  it('should be created', inject([RelatorioSimplesService], (service: RelatorioSimplesService) => {
    expect(service).toBeTruthy();
  }));
});
