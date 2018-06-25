import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAdministradorFormComponent } from './novo-administrador-form.component';

describe('NovoAdministradorFormComponent', () => {
  let component: NovoAdministradorFormComponent;
  let fixture: ComponentFixture<NovoAdministradorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAdministradorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAdministradorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
