import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-circular-geofence',
  standalone: true,
  imports: [CommonModule, CircularGeofenceComponent, RouterOutlet],
  templateUrl: './circular-geofence.component.html',
  styleUrl: './circular-geofence.component.css'
})
export class CircularGeofenceComponent {
  CircularGeofences: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchCircularGeofence().subscribe({
      next: (response) => {
        this.CircularGeofences = response.gvar.dicOfDT.CircularGeofences;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }


}