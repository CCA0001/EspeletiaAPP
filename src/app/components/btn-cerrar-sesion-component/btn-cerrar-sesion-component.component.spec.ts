import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BtnCerrarSesionComponentComponent } from './btn-cerrar-sesion-component.component';

describe('BtnCerrarSesionComponentComponent', () => {
  let component: BtnCerrarSesionComponentComponent;
  let fixture: ComponentFixture<BtnCerrarSesionComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCerrarSesionComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BtnCerrarSesionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
