import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { UserProfileComponentModule } from '../user-profile/user-profile.module';
import { WeekListSelectionComponentModule } from '../week-list-selection/week-list-selection.module';
import { MenuSelectionModule } from '../menu-selection/menu-selection.module';
import { HamburgerMenuComponentModule } from '../hamburger-menu/hamburger-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    UserProfileComponentModule,
    WeekListSelectionComponentModule,
    MenuSelectionModule,
    HamburgerMenuComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
