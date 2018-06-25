import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoClienteFormComponent } from './novo-cliente-form.component';

describe('NovoClienteFormComponent', () => {
  let component: NovoClienteFormComponent;
  let fixture: ComponentFixture<NovoClienteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoClienteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
