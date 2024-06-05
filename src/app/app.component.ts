import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApiService } from '../Services/api.service';
import { DriversComponent } from './drivers/drivers.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddRectangleGeofenceComponent } from './add-rectangle-geofence/add-rectangle-geofence.component';
import { AddPolygonGeofenceComponent } from './add-polygon-geofence/add-polygon-geofence.component';
import { AddCircularGeofenceComponent } from './add-circular-geofence/add-circular-geofence.component';
import { AddGeofenceComponent } from './add-geofence/add-geofence.component';
import { GeofenceComponent } from './geofence/geofence.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    TranslateModule,
    DriversComponent,
    VehiclesComponent,
    AddDriverComponent,
    AddVehicleComponent,
    AddRectangleGeofenceComponent,
    AddPolygonGeofenceComponent,
    AddCircularGeofenceComponent,
    AddGeofenceComponent,
    GeofenceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Fleet Managment System';
}

