import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl:string ='http://localhost:8080/api/user';
  constructor(private http:HttpClient) { }
  signup(user :any){

    return this.http.post('http://localhost:8080/api/user/signup',user);
  }
  login(user : any){
    return this.http.post('http://localhost:8080/api/user/login',user);
  }
  logout(){}
}
