import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-price-quiz',
  templateUrl: './price-quiz.component.html',
  styleUrls: ['./price-quiz.component.sass']
})
export class PriceQuizComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PriceQuizComponent>) { }

  ngOnInit(): void {
  }

}
