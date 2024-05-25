import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenesComponent } from './examenes.component';
import { ExamenesRoutingModule } from './examenes-routing.module';


import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ExamenesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    ExamenesRoutingModule,
    MatProgressBarModule,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard
  ],
  exports: [ExamenesComponent],
})
export class ExamenesModule { }
