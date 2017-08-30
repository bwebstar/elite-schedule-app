import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { EliteAppProvider } from '../../providers/elite-app/elite-app';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(private nav: NavController,
              private eliteAppProvider: EliteAppProvider) {
  }

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }

  ionViewDidLoad() {
        this.eliteAppProvider.getTournaments()
        .then(data => this.tournaments = data);
  }

}