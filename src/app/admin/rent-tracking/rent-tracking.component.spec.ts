import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTrackingComponent } from './rent-tracking.component';

describe('RentTrackingComponent', () => {
  let component: RentTrackingComponent;
  let fixture: ComponentFixture<RentTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
