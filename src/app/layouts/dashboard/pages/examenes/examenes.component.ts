import { Component } from '@angular/core';
import { Iexamenes } from './models';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrl: './examenes.component.scss'
})
export class ExamenesComponent {

  displayedColumns: string[] = [
    'id',
    'materia', 
    'carrera', 
    'createdAt',
    'actions',
  ];


  examenes: Iexamenes[] = [
    {
      id: 1,
      materia: 'Introducción al Diseño gráfico',
      carrera: 'Tec. Diseño gráfico',
      createdAt: new Date(),
    },

    {
      id: 2,
      materia: 'Tipografía',
      carrera: 'Tec. Diseño gráfico',
      createdAt: new Date(),
    },
  ];

}
