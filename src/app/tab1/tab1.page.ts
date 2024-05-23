import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private router : Router, private http : HttpClient) {}

  ngOnInit(){
            // Suscribirse a eventos de navegación del router
            this.router.events.subscribe(event => {
              if (event instanceof NavigationEnd) {
                // Log del URL después de redirección
                console.log('NavigationEnd:', event.urlAfterRedirects);
              }
            });
  }

}
