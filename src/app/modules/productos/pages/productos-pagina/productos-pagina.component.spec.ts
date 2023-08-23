import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPaginaComponent } from './productos-pagina.component';

describe('ProductosPaginaComponent', () => {
  let component: ProductosPaginaComponent;
  let fixture: ComponentFixture<ProductosPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosPaginaComponent]
    });
    fixture = TestBed.createComponent(ProductosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
