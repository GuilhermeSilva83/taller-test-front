import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Make, Tuple } from 'src/app/app/models';
import { AlertService } from 'src/app/app/service/alert.service';
import { CarService } from 'src/app/app/service/car.service';
import { MakeService } from 'src/app/app/service/make.service';
import { UserService } from 'src/app/app/service/user.service';
import { PriceQuizComponent } from '../../dialog/price-quiz/price-quiz.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {


  columns = ['id', 'name', 'color', 'doors', 'make', 'year', 'actions'];
  list : Car[] = [];

  constructor(private carService : CarService, private makeService : MakeService,  private alertService: AlertService,
    private userService : UserService,  private route: ActivatedRoute,   private router: Router, private dialog: MatDialog,
    ) { }

  makeList : Make[] = [];
  
  makeId = 0;

  async ngOnInit(): Promise<void> {
    this.makeList = await this.makeService.List();
    this.Make_SelectionChange();
  }

  async Make_SelectionChange()
  {
      this.list = await this.carService.ListByMakeId(this.makeId);
  }

  async openClick(id:number) {
   
    let dialogRef = this.dialog.open<PriceQuizComponent, Tuple<number>>(PriceQuizComponent, {
      data : { value : id }
    });

    dialogRef.afterClosed().subscribe(async (r : number) => {

      if(r){
        let result = await this.userService.GuessPrice(id, r)
        if (result.success)
        {
          this.alertService.displaySuccess(result.message, 'Congrats');
        }
        else {
          this.alertService.displayWarning(result.message, 'Failed');
        }
      }
    });
  }

  
}