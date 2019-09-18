import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { GamePage } from '../pages/game/game';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamHomePage } from '../pages/team-home/team-home';
import { StandingsPage } from '../pages/standings/standings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteAppProvider } from '../providers/elite-app/elite-app';

@NgModule({
  declarations: [
    MyApp,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    MyTeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    MyTeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteAppProvider
  ]
})
export class AppModule {
}
