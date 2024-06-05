import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRectangleGeofenceComponent } from './add-rectangle-geofence.component';

describe('AddRectangleGeofenceComponent', () => {
  let component: AddRectangleGeofenceComponent;
  let fixture: ComponentFixture<AddRectangleGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRectangleGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRectangleGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
