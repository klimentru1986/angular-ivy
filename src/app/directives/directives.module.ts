import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DirectivesComponent],
  exports: [DirectivesComponent]
})
export class DirectivesModule {}
