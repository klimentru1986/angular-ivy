import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForModule } from './for/for.module';
import { CounterModule } from './counter/counter.module';

@NgModule({
  imports: [CounterModule, ForModule],
  declarations: [AppComponent]
})
export class AppModule {}
