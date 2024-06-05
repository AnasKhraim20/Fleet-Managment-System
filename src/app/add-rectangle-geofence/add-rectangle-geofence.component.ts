import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-rectangle-geofence',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-rectangle-geofence.component.html',
  styleUrl: './add-rectangle-geofence.component.css'
})
export class AddRectangleGeofenceComponent {
  constructor(private api: ApiService) { }
  rectangulargeofenceForm = new FormGroup({

    North: new FormControl(''),
    East: new FormControl(''),
    West: new FormControl(''),
    South: new FormControl(''),
    GeofenceType: new FormControl(''),
    AddedDate: new FormControl(''),
    StrockColor: new FormControl(''),
    StrockOpacity: new FormControl(''),
    StrockWeight: new FormControl(''),
    FillColor: new FormControl(''),
    FillOpacity: new FormControl(''),


  });
  onSubmit() {
    this.api.addRectangularGeofence(this.rectangulargeofenceForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

