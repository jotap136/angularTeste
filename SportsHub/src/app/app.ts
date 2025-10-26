import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './pages/PortalAdmin/users/users';
import { Products } from './pages/PortalAdmin/products/products';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Products, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SportsHub');
}
