import { TestBed, inject } from '@angular/core/testing';

import { TableListFuncionarioService } from './table-list-funcionario.service';

describe('TableListFuncionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableListFuncionarioService]
    });
  });

  it('should be created', inject([TableListFuncionarioService], (service: TableListFuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
