import {
  Component,
  OnInit,
  ɵmarkDirty as markDirty,
  OnDestroy
} from '@angular/core';
import { CounterService } from './counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  counter = 0;
  subscription = new Subscription();

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.subscription.add(
      this.counterService.getCounter().subscribe(c => {
        this.counter = c;
        markDirty(this);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.counterService.increment();
  }
}
