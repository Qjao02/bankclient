import { TestBed, inject } from '@angular/core/testing';

import { TabbleListAdministradorService } from './tabble-list-administrador.service';

describe('TabbleListAdministradorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabbleListAdministradorService]
    });
  });

  it('should be created', inject([TabbleListAdministradorService], (service: TabbleListAdministradorService) => {
    expect(service).toBeTruthy();
  }));
});
