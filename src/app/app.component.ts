import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../enviroments/enviroment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProyectoFinal-AlarconDaiana';

  constructor() {
    if (!environment.isProd) {
      console.log(environment);
    }
  }
}
