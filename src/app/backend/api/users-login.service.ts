import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.module';


@Injectable({
  providedIn: 'root'
})
export class UsersLoginService {


  url : string = 'http://localhost/apiUsersEspeletiaApp/';

  constructor( private http : HttpClient) { }

  public getUser(){
    return this.http.get<User[]>(this.url);
  }
}
