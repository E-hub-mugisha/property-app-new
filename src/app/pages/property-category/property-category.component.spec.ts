import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategoryComponent } from './property-category.component';

describe('PropertyCategoryComponent', () => {
  let component: PropertyCategoryComponent;
  let fixture: ComponentFixture<PropertyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
