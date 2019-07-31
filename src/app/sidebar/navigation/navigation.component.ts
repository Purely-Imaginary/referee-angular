import { Component, OnInit } from '@angular/core';
import { RankingComponent } from 'src/app/mainWindow/ranking/ranking.component';
import { IdeasComponent } from 'src/app/mainWindow/ideas/ideas.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  navigationPoints = [
    { name: 'Rankings' , url: '/ranking' , icon: '★', component: RankingComponent},
    { name: 'Matches' , url: '/matches' , icon: '☉'},
    { name: 'Your profile' , url: '/player/1' , icon: '☣'},
    { name: 'Ideas' , url: '/ideas' , icon: '✅', component: IdeasComponent},
  ];

  constructor() { }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.location.href = url;
  }

}
