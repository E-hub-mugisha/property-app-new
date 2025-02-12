import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertyEditComponent } from './admin-property-edit.component';

describe('AdminPropertyEditComponent', () => {
  let component: AdminPropertyEditComponent;
  let fixture: ComponentFixture<AdminPropertyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPropertyEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPropertyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
