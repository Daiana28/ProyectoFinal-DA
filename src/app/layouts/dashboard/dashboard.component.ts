import { Component } from '@angular/core';
import { AuthService } from '../auth/Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    showFiller = false;

    mostrarComponent= true;

    constructor (private authservice: AuthService) {}

   // login() : void this.authservice.login()}

    isMobile(): boolean{
      return window.innerWidth <= 280;
    }
}
