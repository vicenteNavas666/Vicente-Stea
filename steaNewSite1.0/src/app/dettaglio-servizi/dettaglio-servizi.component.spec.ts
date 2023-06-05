import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioServiziComponent } from './dettaglio-servizi.component';

describe('DettaglioServiziComponent', () => {
  let component: DettaglioServiziComponent;
  let fixture: ComponentFixture<DettaglioServiziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioServiziComponent]
    });
    fixture = TestBed.createComponent(DettaglioServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
