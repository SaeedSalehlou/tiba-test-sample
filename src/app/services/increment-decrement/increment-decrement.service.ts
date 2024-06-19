import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) export class IncrementDecrementService {
  value = 0;
  message!: string;

  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }
}