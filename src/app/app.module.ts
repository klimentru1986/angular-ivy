import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';

@NgModule({
  imports: [ChildModule],
  declarations: [AppComponent]
})
export class AppModule {}

