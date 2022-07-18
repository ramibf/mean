import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches:any;
path:string="assets/images/bg_3.jpg"
title:string="all Matches"  
constructor() { }

  ngOnInit(): void {  
    this.matches=[
      {id:1,teamOne:'FCB',teamTwo:'RMD',scoreOne:'1',scoreTwo:'2'},
      {id:2,teamOne:'CA',teamTwo:'EST',scoreOne:'0',scoreTwo:'2'},
      {id:3,teamOne:'SEV',teamTwo:'ATM',scoreOne:'3',scoreTwo:'2'},
      {id:4,teamOne:'ARS',teamTwo:'PSG',scoreOne:'2',scoreTwo:'2'}
    ]
  }
  updateMatches(x:any){
    this.matches=x;
  }
 

}
