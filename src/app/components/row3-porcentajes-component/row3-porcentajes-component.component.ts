import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row3-porcentajes-component',
  templateUrl: './row3-porcentajes-component.component.html',
  styleUrls: ['./row3-porcentajes-component.component.scss'],
})
export class Row3PorcentajesComponentComponent  implements OnInit {

  recievedPercentageOne : number = 0;
  recievedPercentageTwo : number = 0;
  recievedPercentageThree : number = 0;


  constructor() { }

  ngOnInit() {}

}
