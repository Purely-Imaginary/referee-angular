import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  refreshData() {
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/calculateMatches';
    Http.open("GET", url);
    Http.send();
  }
}
