import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteAppProvider } from '../../providers/elite-app/elite-app';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [];

 constructor(private nav: NavController,
            private navParams: NavParams,
            private eliteAppProvider: EliteAppProvider) {}

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    this.eliteAppProvider.getTournamentData(selectedTourney.id)
    .subscribe(data => {
          this.teams = data.teams;
          });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
    }

}