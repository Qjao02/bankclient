import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbleListFuncionarioComponent } from './tabble-list-funcionario.component';

describe('TabbleListFuncionarioComponent', () => {
  let component: TabbleListFuncionarioComponent;
  let fixture: ComponentFixture<TabbleListFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbleListFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbleListFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
