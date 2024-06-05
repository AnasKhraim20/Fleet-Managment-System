import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-polygon-geofence',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-polygon-geofence.component.html',
  styleUrl: './add-polygon-geofence.component.css'
})
export class AddPolygonGeofenceComponent {


  constructor(private api: ApiService) { }
  polygongeofenceForm = new FormGroup({
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
    this.api.addPolygonGeofence(this.polygongeofenceForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

