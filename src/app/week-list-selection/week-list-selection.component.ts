import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations'; 

@Component({
  selector: 'app-week-list-selection',
  templateUrl: './week-list-selection.component.html',
  styleUrls: ['./week-list-selection.component.scss'],
  animations: [
    trigger('openClose', 
    [
      state('open', style({
        height: '320px',
      })),
      state('closed', style({
        height: '0px'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ])
  ]
})
export class WeekListSelectionComponent implements OnInit {

  weekListContainerClassName: {};
  expandWeekListMenu: boolean = false;
  constructor() { }

  ngOnInit() {
    this.setupContainerClass();
  }

  onArrowWeekListExpanderClick() {
    debugger;

    if (this.expandWeekListMenu) {
      this.expandWeekListMenu = false;
    } else {
      this.expandWeekListMenu = true;

    }
    this.setupContainerClass();  
  }

  setupContainerClass() {
    if (this.expandWeekListMenu) {
      this.weekListContainerClassName =  {
        weekListContainerHidden: false,
        timesheet_div: true,
        weekListContainer: true
      };
    } else {
      this.weekListContainerClassName =  {
        weekListContainerHidden: true,
        timesheet_div: true,
        weekListContainer: false
      };
    }
    return this.weekListContainerClassName;
  }
}
