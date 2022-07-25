import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeekListSelectionComponent } from './week-list-selection.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [WeekListSelectionComponent],
  exports: [WeekListSelectionComponent]
})
export class WeekListSelectionComponentModule {}



