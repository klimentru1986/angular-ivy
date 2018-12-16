import { Component, ɵmarkDirty as markDirty, OnInit } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Ivy!!!';
  counter = 0;

  constructor(private counterService: CountService) {
    setTimeout(() => {
      this.counterService.getCounter().subscribe(c => {
        this.counter = c;
        markDirty(this);
      });
    });
  }

  increment() {
    this.counterService.increment();
  }
}
