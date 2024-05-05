import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenesComponent } from './examenes.component';
import { examenesRoutingModule } from './examenes-routing.module';


import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';




@NgModule({
  declarations: [
    ExamenesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    examenesRoutingModule
  ],
  exports: [ExamenesComponent],
})
export class ExamenesModule { }
