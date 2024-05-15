import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Row3PorcentajesComponentComponent } from './row3-porcentajes-component.component';

describe('Row3PorcentajesComponentComponent', () => {
  let component: Row3PorcentajesComponentComponent;
  let fixture: ComponentFixture<Row3PorcentajesComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Row3PorcentajesComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Row3PorcentajesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
