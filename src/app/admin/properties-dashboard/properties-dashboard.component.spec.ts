import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDashboardComponent } from './properties-dashboard.component';

describe('PropertiesDashboardComponent', () => {
  let component: PropertiesDashboardComponent;
  let fixture: ComponentFixture<PropertiesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
