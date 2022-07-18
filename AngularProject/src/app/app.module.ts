import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { LoginComponent } from './componenets/login/login.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { NotFoundComponent } from './componenets/not-found/not-found.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { WorldCupComponent } from './componenets/world-cup/world-cup.component';
import { ResultComponent } from './componenets/result/result.component';
import { NewsComponent } from './componenets/news/news.component';
import { StatsComponent } from './componenets/stats/stats.component';
import { BlogComponent } from './componenets/blog/blog.component';
import { MatchesComponent } from './componenets/matches/matches.component';
import { TeamsComponent } from './componenets/teams/teams.component';
import { PlayersComponent } from './componenets/players/players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTeamComponent } from './componenets/add-team/add-team.component';
import { AddMatchComponent } from './componenets/add-match/add-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './componenets/admin/admin.component';
import { MatchDetailsComponent } from './componenets/match-details/match-details.component';
import { DataService } from './services/data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {  HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './componenets/team-details/team-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    ContactComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    MatchesComponent,
    TeamsComponent,
    PlayersComponent,
    AddTeamComponent,
    AddMatchComponent,
    ReversePipe,
    AdminComponent,
  
    MatchDetailsComponent,
       TeamDetailsComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
