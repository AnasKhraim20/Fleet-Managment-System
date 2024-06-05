import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolygonGeofenceComponent } from './add-polygon-geofence.component';

describe('AddPolygonGeofenceComponent', () => {
  let component: AddPolygonGeofenceComponent;
  let fixture: ComponentFixture<AddPolygonGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPolygonGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPolygonGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
