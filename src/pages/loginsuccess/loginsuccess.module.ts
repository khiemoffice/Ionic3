import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Loginsuccess } from './loginsuccess';

@NgModule({
  declarations: [
    Loginsuccess,
  ],
  imports: [
    IonicPageModule.forChild(Loginsuccess),
  ],
  exports: [
    Loginsuccess
  ]
})
export class LoginsuccessModule {}
