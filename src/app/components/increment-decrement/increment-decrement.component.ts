import { Component } from '@angular/core';
// import { IncrementDecrementService } from '../../services/increment-decrement.service'
@Component({
  selector: 'app-increment-decrement',
  standalone: true,
  imports: [],
  // providers: [IncrementDecrementService],
  templateUrl: './increment-decrement.component.html',
  styleUrl: './increment-decrement.component.scss'
})
export class IncrementDecrementComponent {

  // constructor(public incrementDecrement: IncrementDecrementService) { }

  // increment() {
  //   this.incrementDecrement.increment();
  // }

  // decrement() {
  //   this.incrementDecrement.decrement();
  // }
}