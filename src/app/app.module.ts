import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';

import { CounterModule } from './counter/counter.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CounterModule, DirectivesModule],
  declarations: [AppComponent, HelloComponent]
})
export class AppModule {}
