import { Component, OnInit } from '@angular/core';
import { Car, Make } from 'src/app/app/models';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.sass']
})
export class CarDetailComponent implements OnInit {

  makeList : Make[] = [];
  list : Car[] = [];
  makeId? = null;
  constructor() { }

  ngOnInit(): void {
  }

  Make_SelectionChange()
  {

  }
}
