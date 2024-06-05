import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-rectangular-geofence',
  standalone: true,
  imports: [CommonModule, RectangularGeofenceComponent, RouterOutlet],
  templateUrl: './rectangular-geofence.component.html',
  styleUrl: './rectangular-geofence.component.css'
})
export class RectangularGeofenceComponent {
  RectangleGeofences: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchRectangularGeofence().subscribe({
      next: (response) => {
        this.RectangleGeofences = response.gvar.dicOfDT.RectangleGeofences;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }


}
