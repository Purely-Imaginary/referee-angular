import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './mainWindow/ranking/ranking.component';
import { DashboardComponent } from './mainWindow/dashboard/dashboard.component';
import { MatchesComponent } from './mainWindow/matches/matches.component';
import { IdeasComponent } from './mainWindow/ideas/ideas.component';


const routes: Routes = [
  { path: 'ideas', component: IdeasComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'matches', component: MatchesComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
