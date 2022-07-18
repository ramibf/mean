import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() match:any;
@Output() newMatches:EventEmitter<any>= new EventEmitter();
x:any;
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
   
  }
  result(x:number,y:number){
    if(x>y) return "win"
    else if (x<y) return "lose"
    else return "draw" 
  }
  deleteMatch(id:number){
    this.matchService.deleteMatch(id).subscribe(
      (data)=>{
        console.log("DELETED")
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            this.newMatches.emit(data);
          }
        )
      }
    )

  }

}
