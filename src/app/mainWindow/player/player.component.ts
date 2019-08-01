import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as CanvasJS from '../../../assets/canvasjs.min.js';
import * as moment from 'moment';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  data:any;
  chart: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(){
    const playerId = this.route.snapshot.paramMap.get("id")
    const endpoint = `http://localhost:3000/player/${playerId}`;
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
  
  async ngOnInit() {
    await this.getRanking()
    

  }

  getRanking() {
    this.data = [];
    this.getData().subscribe((data: []) => {
      // var dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
      console.log(data);
      this.data = data;
      let progressDataPoints = [];
      this.data.progress.forEach(progressPoint => {
        progressDataPoints.push({y: Math.round(progressPoint.rating), x: new Date(progressPoint.timestamp)})
      });
      // progressDataPoints = progressDataPoints.slice(progressDataPoints.length-15,progressDataPoints.length)
      this.chart = new CanvasJS.Chart("chart", {
        zoomEnabled: true,
        width: 500,
        height: 250,
        theme: "dark1",
        animationEnabled: true, 
        exportEnabled: true,
        subtitles: [{
          text: "Progress over time"
        }],
        axisX:{
          valueFormatString: "DD-MM-YY",
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY:{
          includeZero: false
        },
        data: [{
          type: "line", 
          xValueFormatString: "DD-MM-YY",
          dataPoints: progressDataPoints
        }]
      });
    this.chart.render();
    });
  }

}
