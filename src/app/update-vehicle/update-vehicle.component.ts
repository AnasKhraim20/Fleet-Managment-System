import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [ReactiveFormsModule, AddVehicleComponent, RouterOutlet],
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css',
})
export class UpdatevehicleComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  vehicleForm = new FormGroup({
    VehicleNumber: new FormControl(''),
    VehicleType: new FormControl(''),
  });
  vehicleId: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.vehicleId = params.get('id');
    });

    const vehicleData = history.state.vehicleData;

    if (vehicleData) {
      console.log(vehicleData, 'id=', this.vehicleId);
      this.vehicleForm.patchValue({
        VehicleNumber: vehicleData.VehicleNumber,
        VehicleType: vehicleData.VehicleType,
      });
    }
  }

  onSubmit() {
    this.api.updatevehicle(this.vehicleId, this.vehicleForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}
