import { Component } from '@angular/core';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
