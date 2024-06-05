import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-routehistory',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-routehistory.component.html',
  styleUrl: './add-routehistory.component.css'
})
export class AddRoutehistoryComponent {
  constructor(private api: ApiService) { }

  RouteHistoryForm = new FormGroup({


    vehicleId: new FormControl(''),
    vehicleDirection: new FormControl(''),
    status: new FormControl(''),
    vehicleSpeed: new FormControl(''),
    epoch: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),

  });
  onSubmit() {
    this.api.addRouteHistory(this.RouteHistoryForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}
