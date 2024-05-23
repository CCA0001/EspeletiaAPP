import { Component, OnInit } from '@angular/core';
import { UsersLoginService } from 'src/app/backend/api/users-login.service';
import { User } from 'src/app/interfaces/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listUsers : User[];

  
  constructor( public usersLoginService : UsersLoginService) {
    this.LoadUser();
   }

public LoadUser() : void{
  this. usersLoginService.getUser().subscribe(
    (Response) => {
      this.listUsers = Response;
    },
    (Error) => {
      console.log(Error);
    }
  )
}

  ngOnInit() {
  }

}
