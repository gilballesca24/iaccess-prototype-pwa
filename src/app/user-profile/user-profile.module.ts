import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserProfileComponent } from './user-profile.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent]
})
export class UserProfileComponentModule {}
