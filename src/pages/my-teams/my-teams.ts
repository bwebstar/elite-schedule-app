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
  
    constructor(private nav: NavController) {}
  
    goToTournaments(){
        this.nav.push(TournamentsPage);
    }
  
  }