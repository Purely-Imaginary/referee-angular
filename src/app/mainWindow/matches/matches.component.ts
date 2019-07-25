import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  data:any[] = [];
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(){
    const endpoint = 'http://localhost:3000/allMatches';
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
      this.data = data;
    });
  }

}
