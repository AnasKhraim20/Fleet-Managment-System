import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-geofence',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-geofence.component.html',
  styleUrl: './add-geofence.component.css'
})
export class AddGeofenceComponent {
  constructor(private api: ApiService) { }
  geofenceForm = new FormGroup({
    GeofenceType: new FormControl(''),
    AddedDate: new FormControl(''),
    StrockColor: new FormControl(''),
    StrockOpacity: new FormControl(''),
    StrockWeight: new FormControl(''),
    FillColor: new FormControl(''),
    FillOpacity: new FormControl(''),

  });
  onSubmit() {
    this.api.addGeofence(this.geofenceForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

