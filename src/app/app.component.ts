import { Component, ɵmarkDirty as markDirty } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Ivy!!!';
  counter = 0;

  increment() {
    this.counter = this.counter + 1;
    markDirty(this);
  }
}
