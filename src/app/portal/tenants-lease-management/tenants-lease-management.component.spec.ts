import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsLeaseManagementComponent } from './tenants-lease-management.component';

describe('TenantsLeaseManagementComponent', () => {
  let component: TenantsLeaseManagementComponent;
  let fixture: ComponentFixture<TenantsLeaseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsLeaseManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsLeaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
