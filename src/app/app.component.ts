import { Component, ɵrenderComponent as renderComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Ivy!!!';
}

renderComponent(AppComponent);
