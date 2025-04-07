import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent
  implements AfterViewInit {
  private exerciseService = inject(ExerciseService);

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called: Form Element Available!');

    this.form().nativeElement.addEventListener('submit', (event) => {
      console.log("Form Submitted!!");

    })
  }

  addExerciseHandler(name: string, duration: number) {
    this.exerciseService.addExercise(name, duration)
    this.resetFormHandler()
  }

  resetFormHandler() {
    this.form().nativeElement.reset()
  }
}
