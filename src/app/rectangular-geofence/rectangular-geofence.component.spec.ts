import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularGeofenceComponent } from './rectangular-geofence.component';

describe('RectangularGeofenceComponent', () => {
  let component: RectangularGeofenceComponent;
  let fixture: ComponentFixture<RectangularGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectangularGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RectangularGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
