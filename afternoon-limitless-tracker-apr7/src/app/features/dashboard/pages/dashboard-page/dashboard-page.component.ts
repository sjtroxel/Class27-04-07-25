import { Component } from '@angular/core';
import { ExerciseListComponent } from '../../../exercises/components/exercise-list/exercise-list.component';


@Component({
  selector: 'app-dashboard-page',
  imports: [ExerciseListComponent],
  standalone: true,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
