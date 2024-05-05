import { Component } from '@angular/core';
import { Iexamenes } from './models';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent {
  displayedColumns: string[] = [
    'id',
    'materia', 
    'carrera', 
    'createdAt',
    'actions',
  ];

  examenes: Iexamenes[] = [];
  cargandoDatos: boolean = false;

  constructor() {
    this.cargarExamenes();
  }

  async cargarExamenes() {
    // Simulando una operación asincrónica con un retardo de 1 segundo
    await this.simularRetardo(1000);

    // Datos simulados obtenidos de una API ficticia
    this.examenes = [
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

  private simularRetardo(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
