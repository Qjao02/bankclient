import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioSimplesComponent } from './relatorio-simples.component';

describe('RelatorioSimplesComponent', () => {
  let component: RelatorioSimplesComponent;
  let fixture: ComponentFixture<RelatorioSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
