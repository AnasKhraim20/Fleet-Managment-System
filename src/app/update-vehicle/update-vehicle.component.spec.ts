import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevehicleComponent } from './update-vehicle.component';

describe('UpdateVehicleComponent', () => {
  let component: UpdatevehicleComponent;
  let fixture: ComponentFixture<UpdatevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatevehicleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdatevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
