import { HttpClient } from '@angular/common/http';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormLoginComponent),
      multi: true
    },
  ]
})
export class FormLoginComponent  implements ControlValueAccessor {
  
  //Variables que serán editadas desde el ngModule del Form desde el HTML
  enteredPassword : string = "";
  enteredEmail : string = "";
  isLoginPage : boolean = false;

  urlApi : string = 'http://localhost/apiUsersEspeletiaApp/'

  constructor( private router : Router, private http : HttpClient) { }
  
  onChange: any = () => {};
  onTouch: any = () => {};
  disabled: boolean = false;

  // Métodos de ControlValueAccessor
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(){
                // Suscribirse a eventos de navegación del router
                this.router.events.subscribe(event => {
                  if (event instanceof NavigationEnd) {
                    // Log del URL después de redirección
                    console.log('NavigationEnd:', event.urlAfterRedirects);
                  }
                });
  }

  authLogin(){

    const loginData = {
      email : this.enteredEmail,
      password : this.enteredPassword,
      isLoginPage : true
    }

    this.http.post(this.urlApi, loginData).subscribe((Response : any) => {

      if(Response.success){

        this.router.navigateByUrl('tabs/home');

      } else {
        alert(Response.message);
      }

    }, (error) => {
      alert('An error ocurred. Please try again.')
      console.error(error);
    });
  }

  /*
    if(this.enteredEmail === "admin@admin.com" && this.enteredPassword === "admin"){
      this.router.navigate(['/tabs/home']);
    } else {
      alert("Correo o contraseña no existen o son incorrectas");
    }
  }

  */

  redirectToRegister(){
    
    this.router.navigate(['/register']);

  }


}
