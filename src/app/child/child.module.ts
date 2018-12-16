import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ChildComponent],
  exports: [ChildComponent]
})
export class ChildModule {}
