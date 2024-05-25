import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { authReducer } from '../../store/auth/auth.reducer';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatCardModule,
    MatCardContent
  ],
})
export class AuthModule { }

