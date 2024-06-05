import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonGeofenceComponent } from './polygon-geofence.component';

describe('PolygonGeofenceComponent', () => {
  let component: PolygonGeofenceComponent;
  let fixture: ComponentFixture<PolygonGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolygonGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolygonGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
