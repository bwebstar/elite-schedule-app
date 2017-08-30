import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EliteAppProvider {

  private baseUrl = 'https://elite-schedule-app-i2-d0dc4.firebaseio.com';
  currentTourney: any = {};

  constructor(private http: Http) {}

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
      .subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tourneyId){
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map((response: Response) => {
      this.currentTourney = response.json();
      return this.currentTourney;
    });

  }
}