import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-geofence',
  standalone: true,
  imports: [CommonModule, GeofenceComponent, RouterOutlet],
  templateUrl: './geofence.component.html',
  styleUrl: './geofence.component.css'
})
export class GeofenceComponent {
  Geofence: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchGeofence().subscribe({
      next: (response) => {
        this.Geofence = response.gvar.dicOfDT.Geofences;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }


}
