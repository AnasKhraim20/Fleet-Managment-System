import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css',
})
export class AddVehicleComponent {
  constructor(private api: ApiService) { }

  vehicleForm = new FormGroup({
    vehicleType: new FormControl(''),
    vehicleNumber: new FormControl(''),
  });
  onSubmit() {
    this.api.addVehicle(this.vehicleForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}
