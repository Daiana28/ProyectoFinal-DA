import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { ExamenesComponent } from './layouts/dashboard/pages/examenes/examenes.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [

  { 
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule
  ),
  },

  {
    path: 'examenes',
    component: ExamenesComponent,
  },

  {
    path:'**',
    redirectTo: '/dashboard',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
