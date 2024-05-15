import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-btn-cerrar-sesion-component',
  templateUrl: './btn-cerrar-sesion-component.component.html',
  styleUrls: ['./btn-cerrar-sesion-component.component.scss'],
})
export class BtnCerrarSesionComponentComponent  implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {}

  funcionCerrarSesion(){
    this.router.navigate(['/login']);
  }

}
