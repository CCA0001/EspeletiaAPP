import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-table-component',
  templateUrl: './history-table-component.component.html',
  styleUrls: ['./history-table-component.component.scss'],
})
export class HistoryTableComponentComponent  implements OnInit {

  date : string = "";

  constructor() { }

  ngOnInit() {}

}
