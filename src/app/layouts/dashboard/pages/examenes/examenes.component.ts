import { Component, OnInit } from '@angular/core';
import { ExamenesService } from './examenes.service';
import { Iexamenes } from './models';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent implements OnInit {
  displayedColumns: string[] = ['createdAt', 'materia', 'carrera', 'acciones'];
  examenes: Iexamenes[] = [];
  cargandoDatos: boolean = true;

  constructor(private examenesService: ExamenesService) {}

  ngOnInit(): void {
    this.cargarExamenes();
  }

  cargarExamenes(): void {
    this.cargandoDatos = true;
    this.examenesService.getExamenes().subscribe((data) => {
      // Simula un retardo de 1,5 segundos
      setTimeout(() => {
        console.log(data); // Verificar datos recibidos
        this.examenes = data;
        this.cargandoDatos = false;
      }, 1500); 
    }, (error) => {
      console.error('Error al cargar exámenes:', error);
      this.cargandoDatos = false;
    });
  }

  inscribirse(examenId: number): void {
    this.examenesService.inscribirseExamen(examenId).subscribe(() => {
      alert('Inscripción exitosa');
    });
  }
}

