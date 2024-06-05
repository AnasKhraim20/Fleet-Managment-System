import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  [x: string]: any;

  //Drivers
  fetchDrivers(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/Driver/all');
  }
  addDriver(driverData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/Driver/add`, driverData);
  }
  updateDriver(id: string, driverData: any): Observable<any> {
    return this.HTTP.put(
      `http://localhost:5213/api/Driver/Update?driverId=${id}`,
      driverData
    );
  }
  deleteDriver(id: string): Observable<any> {
    return this.HTTP.delete(
      `http://localhost:5213/api/Driver/Delete?driverId=${id}`
    );
  }


  //Vehicle
  fetchVehicles(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/Vehicle/all-vehicles');
  }
  addVehicle(VehicleData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/Vehicle/add`, VehicleData);
  }
  updatevehicle(id: string, vehicleData: any): Observable<any> {
    return this.HTTP.put(
      `http://localhost:5213/api/Vehicle/Update?vehicleID=${id}`,
      vehicleData
    );
  }
  deletevehicle(id: string): Observable<any> {
    return this.HTTP.delete(
      `http://localhost:5213/api/Vehicle/Delete?vehicleId=${id}`);
  }

  //VehicleInformation
  fetchVehiclesInformation(): Observable<any> {
    return this.HTTP.get(`http://localhost:5213/api/VehiclesInformation/vehicleInformation`);//?vehicleId=${Id}
  }
  AddVehicleInformation(VehicleInformationData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/VehiclesInformation/add`, VehicleInformationData);
  }
  updatevehiclesinformation(id: string, vehicleInformationData: any): Observable<any> {
    return this.HTTP.put(
      `http://localhost:5213/api/VehiclesInformation/update`, vehicleInformationData
    );
  }
  deletevehiclesinformation(id: string): Observable<any> {
    return this.HTTP.delete(
      `http://localhost:5213/api/VehiclesInformation/delete`);
  }


  //Geofences
  fetchGeofence(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/Geofence/all    ');
  }
  addGeofence(GeofenceData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/Geofence/add`, GeofenceData);
  }

  //Get Geofences
  fetchCircularGeofence(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/CircularGeofence/circular');
  }
  fetchPolygonGeofence(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/PolygonGeofence/polygon');
  }
  fetchRectangularGeofence(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/RectangularGeofence/rectangular');
  }


  //Add Geofences
  addCircularGeofence(CircularGeofenceData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/CircularGeofence/circular/add`, CircularGeofenceData);
  }
  addPolygonGeofence(PolygonGeofenceData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/PolygonGeofence/polygon/add`, PolygonGeofenceData);
  }
  addRectangularGeofence(RectangularGeofenceData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/RectangularGeofence/rectangular/add`, RectangularGeofenceData);
  }

  //RouteHistory
  fetchRouteHistory(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/RouteHistory/playback');
  }
  addRouteHistory(RouteHistoryData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/RouteHistory/add`, RouteHistoryData);
  }



  constructor(private HTTP: HttpClient) { }
}
