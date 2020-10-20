import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [
    trigger('searchToggle', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
  
  
export class MainComponent implements OnInit {

  searchState = 'ready'

  constructor() { }

  ngOnInit(): void {
  }

}
