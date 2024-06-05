import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-polygon-geofence',
  standalone: true,
  imports: [CommonModule, PolygonGeofenceComponent, RouterOutlet],
  templateUrl: './polygon-geofence.component.html',
  styleUrl: './polygon-geofence.component.css'
})
export class PolygonGeofenceComponent {
  PolygonGeofences: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchPolygonGeofence().subscribe({
      next: (response) => {
        this.PolygonGeofences = response.gvar.dicOfDT.PolygonGeofences;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }


}