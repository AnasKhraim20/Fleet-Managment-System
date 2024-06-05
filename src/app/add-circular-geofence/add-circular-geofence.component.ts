import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-circular-geofence',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-circular-geofence.component.html',
  styleUrl: './add-circular-geofence.component.css'
})
export class AddCircularGeofenceComponent {

  constructor(private api: ApiService) { }
  circulargeofenceForm = new FormGroup({
    radius: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    geofenceType: new FormControl(''),
    addedDate: new FormControl(''),
    strockColor: new FormControl(''),
    strockOpacity: new FormControl(''),
    strockWeight: new FormControl(''),
    fillColor: new FormControl(''),
    fillOpacity: new FormControl(''),


  });
  onSubmit() {
    this.api.addCircularGeofence(this.circulargeofenceForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

