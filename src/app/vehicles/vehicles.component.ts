import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, VehiclesComponent, RouterOutlet],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {
  vehicles: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchVehicles().subscribe({
      next: (response) => {
        this.vehicles = response.gvar.dicOfDT.Vehicles;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }

  updatevehicle(vehicle: any) {
    console.log(vehicle);
    this.router.navigate(['/vehicles/update-vehicle', vehicle.VehicleId], {
      state: {
        vehicleData: {
          VehicleType: vehicle.VehicleType,
          VehicleNumber: vehicle.VehicleNumber,
        },
      },
    });
  }
  deletevehicle(vehicleId: string) {
    console.log(vehicleId);
    this.api.deletevehicle(vehicleId).subscribe({
      next: (response) => {
        console.log(response);
        this.vehicles = this.vehicles.filter(
          (item) => item.vehicleID !== vehicleId
        );
        console.log(this.vehicles);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}
