import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CirculoDeDatosBluetoothComponentComponent } from './circulo-de-datos-bluetooth-component.component';

describe('CirculoDeDatosBluetoothComponentComponent', () => {
  let component: CirculoDeDatosBluetoothComponentComponent;
  let fixture: ComponentFixture<CirculoDeDatosBluetoothComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculoDeDatosBluetoothComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CirculoDeDatosBluetoothComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
