import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';
import { ValidationErrors } from '@angular/forms';
import { ValidationsErrorsPipe } from '../../shared/pipe/Validations-errors.pipe';



@NgModule({
  declarations:
  [DashboardComponent],
  imports: [CommonModule, 
    DashboardRoutingModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    UsersModule,
    MatSelectModule,
    SharedModule,

  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
