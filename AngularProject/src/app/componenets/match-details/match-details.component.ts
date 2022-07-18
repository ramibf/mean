import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
id:any;
//matches:any;
findedMatch:any={}
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.findedMatch=data;
      }
    )
  //  this.matches=JSON.parse(localStorage.getItem("matches")!);
  //  for(let i = 0;i<this.matches.length ;i++){
  //    if(this.matches[i].id == this.id)
  //    this.findedMatch=this.matches[i]
  //  }
  }

}
