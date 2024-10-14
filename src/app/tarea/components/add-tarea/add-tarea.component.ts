import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();

  tarea: Tarea = {
    id: 0,
    tarea: ''
  }

  addTarea() {
    this.emitirTarea.emit(this.tarea);
    console.log(this.tarea);
  }

}
