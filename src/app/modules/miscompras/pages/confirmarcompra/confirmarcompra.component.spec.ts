import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarcompraComponent } from './confirmarcompra.component';

describe('ConfirmarcompraComponent', () => {
  let component: ConfirmarcompraComponent;
  let fixture: ComponentFixture<ConfirmarcompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarcompraComponent]
    });
    fixture = TestBed.createComponent(ConfirmarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
