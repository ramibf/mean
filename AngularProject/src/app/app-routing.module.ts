import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './componenets/add-match/add-match.component';
import { AddTeamComponent } from './componenets/add-team/add-team.component';
import { AdminComponent } from './componenets/admin/admin.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { MatchDetailsComponent } from './componenets/match-details/match-details.component';
import { MatchesComponent } from './componenets/matches/matches.component';
import { NotFoundComponent } from './componenets/not-found/not-found.component';
import { PlayersComponent } from './componenets/players/players.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { TeamDetailsComponent } from './componenets/team-details/team-details.component';
import { TeamsComponent } from './componenets/teams/teams.component';

const routes: Routes = [
  {path :'',component :HomeComponent},
{path:'login',component:LoginComponent },
{path:'signup',component:SignupComponent},
{path:'contact',component:ContactComponent},
{path:'teams',component:TeamsComponent},
{path:'players',component:PlayersComponent},
{path:'matches',component:MatchesComponent},
{path:'add-match',component:AddMatchComponent},
{path:'edit-match/:id',component:AddMatchComponent},
{path:'add-team',component:AddTeamComponent},
{path:'admin',component:AdminComponent},
{path:"match-details/:id",component:MatchDetailsComponent},
{path:"Team-details/:id",component:TeamDetailsComponent},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
