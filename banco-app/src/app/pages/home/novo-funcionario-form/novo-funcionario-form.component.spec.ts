import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFuncionarioFormComponent } from './novo-funcionario-form.component';

describe('NovoFuncionarioFormComponent', () => {
  let component: NovoFuncionarioFormComponent;
  let fixture: ComponentFixture<NovoFuncionarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoFuncionarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoFuncionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
