import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImageComponent } from './banner-image.component';

describe('BannerImageComponent', () => {
  let component: BannerImageComponent;
  let fixture: ComponentFixture<BannerImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerImageComponent]
    });
    fixture = TestBed.createComponent(BannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
