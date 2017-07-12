import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EliteAppProvider {

  data: any; 

  constructor(public http: Http) {}

 baseUrl = 'https://elite-schedule-app-i2-d0dc4.firebaseio.com/tournaments.json';

getTournaments(){
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(this.baseUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });

}
}
