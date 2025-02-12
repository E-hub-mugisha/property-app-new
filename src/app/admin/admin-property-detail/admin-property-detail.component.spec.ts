import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertyDetailComponent } from './admin-property-detail.component';

describe('AdminPropertyDetailComponent', () => {
  let component: AdminPropertyDetailComponent;
  let fixture: ComponentFixture<AdminPropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPropertyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
