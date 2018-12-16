import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private counter = new BehaviorSubject(5);

  constructor() {}

  getCounter(): Observable<number> {
    return this.counter;
  }

  increment(): void {
    this.counter.next(this.counter.value + 1);
  }
}
