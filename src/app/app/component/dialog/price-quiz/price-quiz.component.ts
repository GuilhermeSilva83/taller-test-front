import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tuple } from 'src/app/app/models';
import { UserService } from 'src/app/app/service/user.service';

@Component({
  selector: 'app-price-quiz',
  templateUrl: './price-quiz.component.html',
  styleUrls: ['./price-quiz.component.sass']
})
export class PriceQuizComponent implements OnInit {

  public price : number = 0;

  constructor(public dialogRef: MatDialogRef<PriceQuizComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Tuple<number>, private userService : UserService) { 
  }

  ngOnInit(): void {
    
  }

  Submit() {
      this.dialogRef.close(this.price)
  }

  Cancel() {
    this.dialogRef.close();
  }
}
