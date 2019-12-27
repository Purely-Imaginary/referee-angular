import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    ) { 
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd){
          const cookieValue = this.cookieService.get('jwt');
          if (!cookieValue && val.url !== '/login') {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  public buttonText = "Download"

  ngOnInit() {
    
  }

  refreshData() {
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/calculateMatches';
    this.buttonText = "Downloading...";
    const self = this;
    Http.open("GET", url);
    Http.onload = function() {
      const response = JSON.parse(Http.response);
      const lastMatch = moment(response.lastParsedMatch).fromNow();
      self.buttonText = response.matchesProcessed.toString() + " (" + lastMatch + ")";
    };
    Http.send();
  }
}
