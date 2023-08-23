import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadoPageComponent } from './realizado-page.component';

describe('RealizadoPageComponent', () => {
  let component: RealizadoPageComponent;
  let fixture: ComponentFixture<RealizadoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealizadoPageComponent]
    });
    fixture = TestBed.createComponent(RealizadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
