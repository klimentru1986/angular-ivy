import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  engines = ['Template Compiler', 'View Engine', 'Ivy'];
}
