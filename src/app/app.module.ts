import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';
import { ForModule } from './for/for.module';

@NgModule({
  imports: [ChildModule, ForModule],
  declarations: [AppComponent]
})
export class AppModule {}
