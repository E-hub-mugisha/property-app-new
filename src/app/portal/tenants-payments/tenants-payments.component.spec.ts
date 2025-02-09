import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsPaymentsComponent } from './tenants-payments.component';

describe('TenantsPaymentsComponent', () => {
  let component: TenantsPaymentsComponent;
  let fixture: ComponentFixture<TenantsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
