import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncabezadoAppMovilEspeletiaComponentComponent } from './encabezado-app-movil-espeletia-component.component';

describe('EncabezadoAppMovilEspeletiaComponentComponent', () => {
  let component: EncabezadoAppMovilEspeletiaComponentComponent;
  let fixture: ComponentFixture<EncabezadoAppMovilEspeletiaComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoAppMovilEspeletiaComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncabezadoAppMovilEspeletiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
