import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsTenantsComponent } from './tenants-tenants.component';

describe('TenantsTenantsComponent', () => {
  let component: TenantsTenantsComponent;
  let fixture: ComponentFixture<TenantsTenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsTenantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
