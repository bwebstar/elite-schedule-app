import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [
    {id: 1, name: 'HC Elite'},
    {id: 2, name: 'Team Takeover'},
    {id: 3, name: 'DC Thunder'}
  ];

 constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  itemTapped($event, team){
  this.navCtrl.push(TeamHomePage, team);
  }

}
