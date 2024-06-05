import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-routehistory',
  standalone: true,
  imports: [CommonModule, RoutehistoryComponent, RouterOutlet],
  templateUrl: './routehistory.component.html',
  styleUrl: './routehistory.component.css'
})
export class RoutehistoryComponent {
  RouteHistory: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchRouteHistory().subscribe({
      next: (response) => {
        this.RouteHistory = response.gvar.dicOfDT.RouteHistory;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}
