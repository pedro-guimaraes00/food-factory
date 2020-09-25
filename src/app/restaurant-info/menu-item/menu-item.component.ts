import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { MenuItem } from './menu-item.model'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',

  animations: [
    trigger('showMenu', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
  
  
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  
  menuItemState = 'ready'

  constructor() { }

  ngOnInit(): void {
  }

  addEvent() {
    this.add.emit(this.menuItem)
  }

}
