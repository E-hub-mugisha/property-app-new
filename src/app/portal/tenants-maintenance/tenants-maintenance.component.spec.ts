import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsMaintenanceComponent } from './tenants-maintenance.component';

describe('TenantsMaintenanceComponent', () => {
  let component: TenantsMaintenanceComponent;
  let fixture: ComponentFixture<TenantsMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
