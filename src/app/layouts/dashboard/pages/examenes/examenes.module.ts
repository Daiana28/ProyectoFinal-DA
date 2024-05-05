import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenesComponent } from './examenes.component';
import { examenesRoutingModule } from './examenes-routing.module';


import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    ExamenesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    examenesRoutingModule,
    MatProgressBarModule,
  ],
  exports: [ExamenesComponent],
})
export class ExamenesModule { }
