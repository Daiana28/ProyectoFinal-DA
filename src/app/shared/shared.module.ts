import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Pipe, PipeTransform } from '@angular/core';
import { ValidationsErrorsPipe } from './pipe/Validations-errors.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { MatListModule } from '@angular/material/list';
import { AuthModule } from '../layouts/auth/auth.module';






@NgModule({
  imports: [CommonModule],

  exports: [
    MatTableModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    ValidationsErrorsPipe,
    MatListModule,
    ResaltadoDirective
  ],

  declarations: [ValidationsErrorsPipe, ResaltadoDirective],

})
export class SharedModule { }
