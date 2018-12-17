import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForModule } from './for/for.module';
import { CounterModule } from './counter/counter.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CounterModule, ForModule],
  declarations: [AppComponent, HelloComponent]
})
export class AppModule {}
