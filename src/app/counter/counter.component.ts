import { Component, OnInit, ɵmarkDirty as markDirty } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.getCounter().subscribe(c => {
      this.counter = c;
      markDirty(this);
    });
  }

  increment() {
    this.counterService.increment();
  }
}
