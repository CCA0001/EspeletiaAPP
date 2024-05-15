import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register-component',
  templateUrl: './form-register-component.component.html',
  styleUrls: ['./form-register-component.component.scss'],
})
export class FormRegisterComponentComponent  implements OnInit {

  enteredPassword : string = "";
  enteredEmail : string = "";
  enteredUserName: string = "";
  enteredSerialNumber : number = 0;

  constructor( private router : Router) { }

  ngOnInit() {}


  authRegister(){
    alert("Su cuenta ha sido creada, por favor inicie sesión");
    this.redirectToLogin();
  }

  redirectToLogin(){

    this.router.navigate(['/login']);
  }

}
