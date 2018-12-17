import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  engines: string[];

  constructor() {}

  ngOnInit() {
    this.engines = ['Renderer', 'Renderer2', 'Ivy'];
  }
}
