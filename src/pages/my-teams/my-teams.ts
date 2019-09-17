import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { EliteAppProvider } from '../../providers/elite-app/elite-app';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  //   constructor(private navCtrl: NavController, public navParams: NavParams) {
  // }

 tournaments: any;

  constructor(private navCtrl: NavController, public eliteAppProvider: EliteAppProvider) {
    this.getTournaments();
  }

  goToTournaments(){
      this.navCtrl.push(TournamentsPage);
  }

   getTournaments() {
     this.eliteAppProvider.getTournaments()
     .then(data => {
       this.tournaments = data;
     });
   }


}
