import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Make } from 'src/app/app/models';
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
    private userService : UserService,  private route: ActivatedRoute,   private router: Router, private dialog: MatDialog) { }

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

  openClick() {
    this.alertService.displaySuccess('tests', 'tests');

    let dialogRef = this.dialog.open(PriceQuizComponent, {
      height: '400px',
      width: '600px',
    });



  }
}
