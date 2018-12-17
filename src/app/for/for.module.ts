import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForComponent } from './for.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ForComponent],
  exports: [ForComponent]
})
export class ForModule {}
