import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './mainWindow/ranking/ranking.component';
import { DashboardComponent } from './mainWindow/dashboard/dashboard.component';
import { MatchesComponent } from './mainWindow/matches/matches.component';
import { IdeasComponent } from './mainWindow/ideas/ideas.component';
import { PlayerComponent } from './mainWindow/player/player.component';
import { MatchComponent } from './mainWindow/match/match.component';
import { InsertMatchComponent } from './mainWindow/insert-match/insert-match.component';


const routes: Routes = [
  { path: 'match/:id', component: MatchComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'insertMatch', component: InsertMatchComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
