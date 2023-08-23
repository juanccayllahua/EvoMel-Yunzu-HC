import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPaginaComponent } from './compras-pagina.component';

describe('ComprasPaginaComponent', () => {
  let component: ComprasPaginaComponent;
  let fixture: ComponentFixture<ComprasPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasPaginaComponent]
    });
    fixture = TestBed.createComponent(ComprasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
