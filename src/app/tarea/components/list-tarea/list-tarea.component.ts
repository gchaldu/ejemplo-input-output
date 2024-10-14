import { Component } from '@angular/core';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { Tarea } from '../../interfaces/tarea.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent {

  listaTareas: Tarea[] = [
    { id: 1, tarea: 'Hacer las compras' },
    { id: 2, tarea: 'limpiar la case' }
  ];

  recibirTareaHijo(tarea: any) {
    console.log('first')
    this.listaTareas.push({ ...tarea })
  }

}
