import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private http : HttpClient, private router : Router) {}

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
