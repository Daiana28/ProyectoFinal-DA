import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    CarrerasComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    MatExpansionModule,
  ]
})
export class CarrerasModule { }
