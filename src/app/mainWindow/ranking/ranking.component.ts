import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  data:any = []
  constructor(private http: HttpClient) {
    
   }

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
    this.getRanking()
  }

  getRanking() {
    this.data = [];
    this.getData().subscribe((data: {}) => {
      console.log(data);
      this.data = data;
    });
  }

}
