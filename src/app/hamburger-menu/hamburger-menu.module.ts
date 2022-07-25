import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HamburgerMenuComponent } from './hamburger-menu.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [HamburgerMenuComponent],
  exports: [HamburgerMenuComponent]
})
export class HamburgerMenuComponentModule {}



