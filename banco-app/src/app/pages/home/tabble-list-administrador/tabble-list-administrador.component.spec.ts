import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbleListAdministradorComponent } from './tabble-list-administrador.component';

describe('TabbleListAdministradorComponent', () => {
  let component: TabbleListAdministradorComponent;
  let fixture: ComponentFixture<TabbleListAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbleListAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbleListAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
