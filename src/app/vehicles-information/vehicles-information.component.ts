import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-vehicles-information',
  standalone: true,
  imports: [CommonModule, VehiclesInformationComponent, RouterOutlet],
  templateUrl: './vehicles-information.component.html',
  styleUrl: './vehicles-information.component.css'
})
export class VehiclesInformationComponent {
  deleteDriver(arg0: any) {
    throw new Error('Method not implemented.');
  }
  updateDriver(_t5: any) {
    throw new Error('Method not implemented.');
  }
  VehicleInformations: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchDrivers().subscribe({
      next: (response) => {
        this.VehicleInformations = response.gvar.dicOfDT.VehicleInformations;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }

  updateVehicleInformation(vehicle: any, driver: any, vehicleId: any) {
    console.log(this.VehicleInformations);
    this.router.navigate(['/VehicleInformations/update-VehicleInformation', this.VehicleInformations], {
      state: {
        VehicleInformationsData: {
          VehicleModel: vehicle.VehicleModel,
          phoneNumber: driver.PhoneNumber,
          VehicleMake: vehicle.VehicleMake,
          LastLongitude: vehicle.LastLongitude,
          LastLatitude: driver.LastLatitude,
          DriverName: driver.DriverName,
          VehicleType: vehicle.VehicleType,
          VehicleNumber: vehicle.VehicleNumber,
        },
      },
    });
  }
  deleteVehicleInformations(driverId: string, vehicleId: any) {
    console.log(driverId);
    this.api['deleteVehicleInformations'](vehicleId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.VehicleInformations = this.VehicleInformations.filter(
          (item) => item.vehicleId !== vehicleId
        );
        console.log(this.VehicleInformations);
      },

    });
  }
}
