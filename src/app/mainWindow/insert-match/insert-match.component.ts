import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-insert-match',
  templateUrl: './insert-match.component.html',
  styleUrls: ['./insert-match.component.css']
})
export class InsertMatchComponent implements OnInit {

  encapsulation: ViewEncapsulation.ShadowDom

  data:any[] = [];
  constructor(private http: HttpClient) { }

  keyword = 'name';
  chosenPlayers = 
  {
    player11: undefined, 
    player12: undefined, 
    player21: undefined, 
    player22: undefined
  };
  estimatedScore = "--:--";

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(){
    const endpoint = 'http://localhost:3000/ranking';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })

    };

    return this.http.get(endpoint).pipe(
      map(this.extractData));

  }

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers() {
    this.data = [];
    this.getData().subscribe((data: []) => {
      console.log(data);
      this.data = data;
    });
  }

  calculateEstimation(){
    if (this.chosenPlayers.player11 === undefined
      || this.chosenPlayers.player12 === undefined
      || this.chosenPlayers.player21 === undefined
      || this.chosenPlayers.player22 === undefined
      ) {
        this.estimatedScore = "--:--";
        return;
      }

      const avg1elo = (this.chosenPlayers.player11.presentRating + this.chosenPlayers.player12.presentRating) / 2;
      const avg2elo = (this.chosenPlayers.player21.presentRating + this.chosenPlayers.player22.presentRating) / 2;
  
      const difference = (avg1elo - avg2elo) / 1600;
      const maxScore = 10;
  
      const estimationForTeam1 = 1 / (1 + (10 ** -difference));
      const estimationForTeam2 = 1 / (1 + (10 ** difference));
  
      const scoreCoefficient = maxScore / Math.max(estimationForTeam1, estimationForTeam2);
  
      const team1EstimatedScore = Math.round(estimationForTeam1 * scoreCoefficient * 100) / 100;
      const team2EstimatedScore = Math.round(estimationForTeam2 * scoreCoefficient * 100) / 100;
      this.estimatedScore = `${team1EstimatedScore} : ${team2EstimatedScore}`;

  }

  selectEvent(player, inputId) {
    this.chosenPlayers[inputId] = player;
    console.log(this.chosenPlayers);
    this.calculateEstimation();
  }
 
  onChangeSearch(val: string) {

  }
  
  onFocused(e){
    // do something when input is focused
  }

}
