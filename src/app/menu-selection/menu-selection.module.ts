import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuSelectionComponent } from './menu-selection.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MenuSelectionComponent],
  exports: [MenuSelectionComponent]
})
export class MenuSelectionModule {}



