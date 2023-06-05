import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietaComponent } from './societa.component';

describe('SocietaComponent', () => {
  let component: SocietaComponent;
  let fixture: ComponentFixture<SocietaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocietaComponent]
    });
    fixture = TestBed.createComponent(SocietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
