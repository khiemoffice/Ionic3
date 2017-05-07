import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Loginsuccess } from '../loginsuccess/loginsuccess'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lgPage = Loginsuccess
  constructor(public navCtrl: NavController) {

  }

}
