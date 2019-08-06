import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  tempData:string;
  data:any[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(){
    const matchId = this.route.snapshot.paramMap.get("id")
    const endpoint = `http://localhost:3000/match/${matchId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })

    };

    return this.http.get(endpoint).pipe(
      map(this.extractData));

  }
  

  ngOnInit() {
    this.getRanking()
  }

  getRanking() {
    this.data = [];
    this.getData().subscribe((data: []) => {
      console.log(data);
      this.data = data;
      this.tempData = JSON.stringify(data);
    });
  }


}
