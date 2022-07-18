import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  teams: any;
  players: any;
  constructor(private router: Router,private matchService:MatchService,private teamService:TeamService) { }

  ngOnInit() {
    this.getAllMatches()
    this.getAllTeams()

  }
  getAllMatches(){
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        this.matches=data;
      }
    )
  }
  goToDisplay(id: number) {
    this.router.navigate([`match-details/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`edit-match/${id}`]);
  }
  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        this.getAllMatches()
        
       
      }
    )

  }
  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data;
      }
    )
  }
  goToDisplayTeam(id: number) {
    this.router.navigate([`Team-details/${id}`]);
  }
  goToEditTeam(id: number) {
    this.router.navigate([`edit-Team/${id}`]);
  }
  deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe(
      ()=>{
        this.getAllTeams()
        
       
      }
    )

  }
}

