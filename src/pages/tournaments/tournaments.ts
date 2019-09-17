import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  // constructor(private navCtrl: NavController, private navParams: NavParams) {
  // }

    constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }


  goToTeam(){
      this.navCtrl.push(TeamsPage);
  }

    itemTapped(){
      this.navCtrl.push(TeamsPage);
  }

}

// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { TeamsPage } from '../teams/teams';
// import { EliteAppProvider } from '../../providers/elite-app/elite-app';

// @IonicPage()
// @Component({
//   selector: 'page-tournaments',
//   templateUrl: 'tournaments.html',
// })
// export class TournamentsPage {

//   tournaments: any;

//     constructor(private navCtrl: NavController, private eliteAppProvider: EliteAppProvider) {
//   }

//   ionViewLoaded() {
//       this.eliteAppProvider.getTournaments()
//       .then(data => {
//       this.tournaments = data});
//   }

//   goToTeam(){
//       this.navCtrl.push(TeamsPage);
//   }

//   itemTapped($event, tourney){
//       this.navCtrl.push(TeamsPage, tourney);
//   }

// }

