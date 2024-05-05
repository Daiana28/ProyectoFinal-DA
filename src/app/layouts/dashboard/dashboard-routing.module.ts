import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';



const routes: Routes = [

  /** Path actual: /dashboard */
  {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then ((m) => m.HomeModule),
      },

  {
    path: 'examenes',
    loadChildren: () => import( './pages/examenes/examenes.module').then ((m) => m.ExamenesModule),
      },

  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then ((m) => m.UsersModule),
  },

  {
    path: 'carreras',
    loadChildren: () => import('./pages/carreras/carreras.module').then ((m) => m.CarrerasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
