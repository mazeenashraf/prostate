import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { TadkhomComponent } from "./pages/tadkhom/tadkhom.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TadkhomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enlargedprostate';
}
