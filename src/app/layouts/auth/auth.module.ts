import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './Service/auth.service';
import {MatCardModule} from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, 
    SharedModule, 
    AuthRoutingModule,
    MatCardModule,
    MatLabel,
  ],
})
export class AuthModule {}