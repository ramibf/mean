import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
addMatchForm!:FormGroup;
id:any;
matches:any;
title!:String;
constructor(private fb :FormBuilder,private activatedRoute:ActivatedRoute,private matchService:MatchService,private router:Router) { }

  ngOnInit(): void {
    this.addMatchForm=this.fb.group({
      scoreOne:[''],
      scoreTwo:[''],
      matchOne:[''],
      matchTwo:['']
    })
    this.title='Add Match'
    
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id ){
        this.matchService.getMatchById(this.id).subscribe(
          (data)=>{
            this.match=data;
          }
        )
        
    
      // this.matches=JSON.parse(localStorage.getItem("matches")!);
      // for(let i = 0;i<this.matches.length ;i++){
      //   if(this.matches[i].id == this.id){
      //   this.match=this.matches[i]
      this.title='Edit Match'
      }
      
  }


    
   
  

  submit(){
   if (this.id){
     this.matchService.editMatch(this.match).subscribe(
       ()=>{
         console.log('match edited')
         this.router.navigate([''])
       }
     )
   }
   else{
     this.matchService.addMatch(this.match).subscribe(
       ()=>{
         console.log('Match added')
         this.router.navigate(['admin'])
       }
     )
   }
  
  }


}


