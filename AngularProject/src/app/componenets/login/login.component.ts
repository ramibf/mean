import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
loginForm!:FormGroup;
errMsg!:String
  constructor(private fb:FormBuilder,private userService : UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[''],
      pwd:['']
    })


  }
login(){
  console.log('the inputs are ',this.user)
  this.userService.login(this.user).subscribe(
    (data)=>{
      console.log('Match added',data)
      if(data)
      this.router.navigate([''])
      else
       this.errMsg=" pwd || email is wrong "
    }
  )
}

}
