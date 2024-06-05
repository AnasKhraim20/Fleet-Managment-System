import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircularGeofenceComponent } from './add-circular-geofence.component';

describe('AddCircularGeofenceComponent', () => {
  let component: AddCircularGeofenceComponent;
  let fixture: ComponentFixture<AddCircularGeofenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCircularGeofenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCircularGeofenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
