import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularGeofenceComponent } from './circular-geofence.component';

describe('CircularGeofenceComponent', () => {
  let component: CircularGeofenceComponent;
  let fixture: ComponentFixture<CircularGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
