import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent  implements OnInit {
  
  //Variables que serán editadas desde el ngModule del Form desde el HTML
  enteredPassword : string = "";
  enteredEmail : string = "";

  constructor( private router : Router) { }

  authLogin(){

    if(this.enteredEmail === "admin@admin.com" && this.enteredPassword === "admin"){
      this.router.navigate(['/tabs/home']);
    } else {
      alert("Correo o contraseña no existen o son incorrectas");
    }
  }

  redirectToRegister(){
    
    this.router.navigate(['/register']);

  }


  ngOnInit() {}

}
