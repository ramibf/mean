import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl:string ='http://localhost:8080/api/matches';
  constructor(private http:HttpClient) { }
  getAllMatches(){
    return this.http.get(this.matchUrl);
  }
  getMatchById(id:number){
    return this.http.get(`${this.matchUrl}/${id}`);
  }
  deleteMatch(id:number){
    return this.http.delete(`${this.matchUrl}/${id}`);

  }
  addMatch(match :any)
  {
    return this.http.post(this.matchUrl,match);

  }
  editMatch(match : any){
    return this.http.put(`${this.matchUrl}/${match.id}`,match);


  }
}
