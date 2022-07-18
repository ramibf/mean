import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string ='api/teams';
  constructor(private http:HttpClient) { }
  getAllTeams(){
    return this.http.get(this.teamUrl);
  }
  getTeamId(id:number){
    return this.http.get(`${this.teamUrl}/${id}`);
  }
  deleteTeam(id:number){
    return this.http.delete(`${this.teamUrl}/${id}`);

  }
  addTeam(team :any)
  {
    return this.http.post(this.teamUrl,team);

  }
  editTeam(team : any){
    return this.http.put(`${this.teamUrl}/${team.id}`,team);


  }
}
