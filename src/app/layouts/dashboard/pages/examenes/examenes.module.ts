import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenesComponent } from './examenes.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    ExamenesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [ExamenesComponent],
})
export class ExamenesModule { }
