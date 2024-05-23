import { HttpClient } from '@angular/common/http';
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
  enteredSerialCode : string = "";
  urlApi : string = 'http://localhost/apiUsersEspeletiaApp/';
  isRegisterPage : boolean = false;


  constructor( private router : Router, private http : HttpClient) { }

  ngOnInit() {}


  redirectToLogin(){

    this.router.navigate(['/login']);
  }


  authRegister(){

    const registerData = {
      username : this.enteredUserName,
      email : this.enteredEmail,
      password : this.enteredPassword,
      serialCode : this.enteredSerialCode,
      isRegisterPage : true
    }  

    this.http.post(this.urlApi, registerData).subscribe((Response : any) => {

      if(Response.success){ 

        alert("Su cuenta ha sido creada, por favor inicie sesión");
        this.redirectToLogin();

      } else {

        alert(Response.message);

      }
    }, (error) => {

      alert('Ha ocurrido un error. Por favor, intentelo otra vez');
      console.error(error);

    });

  }
}
