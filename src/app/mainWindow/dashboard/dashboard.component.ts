import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any[] = [];
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(){
    const endpoint = 'http://localhost:3000/getMatchesFromLastDays/7';
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
    });
  }


}
