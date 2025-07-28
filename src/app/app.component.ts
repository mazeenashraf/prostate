import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enlargedprostate';
  ngOnInit() {
  AOS.init();
}
}
