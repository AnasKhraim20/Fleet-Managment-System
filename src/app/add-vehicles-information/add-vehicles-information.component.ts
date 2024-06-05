// import { Component } from '@angular/core';
// import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { ApiService } from '../../Services/api.service';

// @Component({
//   selector: 'app-add-vehicles-information',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './add-vehicles-information.component.html',
//   styleUrl: './add-vehicles-information.component.css'
// })
// export class AddVehiclesInformationComponent {
//   constructor(private api: ApiService) { }

//   VehicleInformationForm = new FormGroup({

//     vehicleId: new FormControl(''),
//     driverId: new FormControl(''),
//     vehicleMake: new FormControl(''),
//     vehicleModel: new FormControl(''),
//     purchaseDate: new FormControl(''),

//   });
//   onSubmit() {
//     this.api.AddVehicleInformation(this.VehicleInformationForm.value).subscribe({
//       next: (response) => {
//         console.log(response);
//       },
//       error: (error) => {
//         console.log('Hi', error);
//       },
//     });
//   }

// }
