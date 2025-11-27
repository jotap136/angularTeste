import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './pages/PortalAdmin/users/users';
import { Products } from './pages/PortalAdmin/products/products';
import { EditProducts } from './pages/PortalAdmin/EditProducts/editP';
import { EditUsers } from './pages/PortalAdmin/EditUsers/editU'; 
import { LeftSidebar } from './pages/PortalAdmin/left-sidebar/left.sidebar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Products, Users, EditProducts, EditUsers, LeftSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SportsHub');
}
