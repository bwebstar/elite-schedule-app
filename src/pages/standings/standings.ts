import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  team: any;

  constructor(private navCtrl: NavController, private navParams: NavParams ) {
  this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');
  }

    goToGame() {
      this.navCtrl.push(GamePage);
  }

  // goBack() {
  //     this.navCtrl.pop();
  // }

}
