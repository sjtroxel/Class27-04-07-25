import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-stop-watch',
  imports: [DatePipe],
  standalone: true,
  templateUrl: './exercise-stop-watch.component.html',
  styleUrl: './exercise-stop-watch.component.css'
})
export class ExerciseStopWatchComponent implements OnInit, OnDestroy {
  elapsedTime = 0
  isRunning = false
  timerId: any
  logs: {date: Date, elapsedTime: number}[] = []

// constructor() {
//   console.log('Constructor called: Component is being created!');
// }

ngOnInit(): void {
  console.log('ngOnInit called: Component initialized!')
}

ngOnDestroy(): void {
  if (this.isRunning) {
    clearInterval(this.timerId)
    this.timerId = null;
  }
  console.log('ngOnDestroy called: Component destroyed!!');
}

  startStopwatchHandler() {

    if (!this.isRunning) {
      this.isRunning = true
      this.timerId = setInterval(() => {

      // this.elapsedTime++
      console.log("Elapsed Time: ", this.elapsedTime / 1000);
      this.elapsedTime += 1000
    }, 1000)

  }
  }
  stopStopwatchHandler() {
    if (this.isRunning) {
      this.isRunning = false
      clearInterval(this.timerId)
      this.timerId = null
      let date = new Date()
      this.logs.push({date: date, elapsedTime: this.elapsedTime})
      console.log(this.logs);
      this.elapsedTime = 0
    }
  }
}


// class Car {
//   constructor() {

//   }
// }

// new Car()
