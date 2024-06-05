import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { UpdatevehicleComponent } from './update-vehicle/update-vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { AddGeofenceComponent } from './add-geofence/add-geofence.component';
import { CircularGeofenceComponent } from './circular-geofence/circular-geofence.component';
import { AddCircularGeofenceComponent } from './add-circular-geofence/add-circular-geofence.component';
import { PolygonGeofenceComponent } from './polygon-geofence/polygon-geofence.component';
import { RectangularGeofenceComponent } from './rectangular-geofence/rectangular-geofence.component';
import { AddPolygonGeofenceComponent } from './add-polygon-geofence/add-polygon-geofence.component';
import { AddRectangleGeofenceComponent } from './add-rectangle-geofence/add-rectangle-geofence.component';
import { RoutehistoryComponent } from './routehistory/routehistory.component';
import { AddRoutehistoryComponent } from './add-routehistory/add-routehistory.component';
import { VehiclesInformationComponent } from './vehicles-information/vehicles-information.component';

export const routes: Routes = [
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'drivers/add-driver',
    component: AddDriverComponent,
  },
  {
    path: 'drivers/update-driver/:id',
    component: UpdateDriverComponent,
  }, {
    path: 'vehicles/add-vehicle',
    component: AddVehicleComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
  {
    path: 'vehicles/update-vehicle/:id',
    component: UpdatevehicleComponent,
  },
  {
    path: 'vehiclesInformation',
    component: VehiclesInformationComponent,
  },
  {
    path: 'vehiclesInformation/add',
    component: AddVehicleComponent
  },
  {
    path: 'geofences',
    component: GeofenceComponent,
  },
  {
    path: 'geofences/add-geofence',
    component: AddGeofenceComponent,
  },
  {
    path: 'circular-geofences',
    component: CircularGeofenceComponent,
  },
  {
    path: 'rectangular-geofences',
    component: RectangularGeofenceComponent,
  },
  {
    path: 'polygon-geofences',
    component: PolygonGeofenceComponent,
  },
  {
    path: 'geofences/add-circular-geofence',
    component: AddCircularGeofenceComponent,
  },
  {
    path: 'geofences/add-rectangle-geofence',
    component: AddRectangleGeofenceComponent,
  },
  {
    path: 'geofences/add-polygon-geofence',
    component: AddPolygonGeofenceComponent,
  },
  {
    path: 'routehistory',
    component: RoutehistoryComponent,
  },
  {
    path: 'routehistory/add',
    component: AddRoutehistoryComponent,
  },

];
