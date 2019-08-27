import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './sidebar/navigation/navigation.component';
import { RankingComponent } from './mainWindow/ranking/ranking.component';
import { DashboardComponent } from './mainWindow/dashboard/dashboard.component';
import { MatchesComponent } from './mainWindow/matches/matches.component';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { IdeasComponent } from './mainWindow/ideas/ideas.component';
import { AbsPipe } from './abs.pipe';
import { PlayerComponent } from './mainWindow/player/player.component';
import { FromNowPipe } from './from-now.pipe';
import { ReplacePipe } from './replace.pipe';
import { MatchComponent } from './mainWindow/match/match.component';
import { InsertMatchComponent } from './mainWindow/insert-match/insert-match.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavigationComponent,
    RankingComponent,
    DashboardComponent,
    MatchesComponent,
    IdeasComponent,
    AbsPipe,
    PlayerComponent,
    FromNowPipe,
    ReplacePipe,
    MatchComponent,
    InsertMatchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
