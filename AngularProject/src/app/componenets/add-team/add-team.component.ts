import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
 team:any={};
 addTeamForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addTeamForm=this.fb.group({
      name:[''],
      foundation:[''],
      staduim:['']
    })
  }
  add(){
    console.log("this team things are ",this.team)
  }

}
