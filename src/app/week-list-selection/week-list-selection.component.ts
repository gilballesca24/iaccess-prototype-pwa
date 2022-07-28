import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-week-list-selection',
  templateUrl: './week-list-selection.component.html',
  styleUrls: ['./week-list-selection.component.scss'],
})
export class WeekListSelectionComponent implements OnInit {

  weekListContainerClassName: string;
  constructor() { }

  ngOnInit() {
    this.weekListContainerClassName = "weekListContainer timesheet_div";
    this.setupContainerClass();

  }

  onArrowWeekListExpanderClick() {
    this.setupContainerClass();  
  }

  setupContainerClass() {
    if (this.weekListContainerClassName === "weekListContainer timesheet_div") {
      this.weekListContainerClassName = "weekListContainerHidden timesheet_div"; 
    } else {
      this.weekListContainerClassName = "weekListContainer timesheet_div";
    }
    return this.weekListContainerClassName;
  }

}
