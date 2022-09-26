import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Make } from 'src/app/app/models';
import { CarService } from 'src/app/app/service/car.service';
import { MakeService } from 'src/app/app/service/make.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.sass']
})
export class CarDetailComponent implements OnInit {

  makeList : Make[] = [];
  list : Car[] = [];
  model : Car = new Car()

  constructor(private carService: CarService, private makeService : MakeService, 
    private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {

    let idParam = this.route.snapshot.paramMap.get('id')
    if (idParam)
    {
        this.model = await this.carService.GetById(parseInt(idParam));
    }

    this.makeList = await this.makeService.List();

  }

  async Submit() {
    let result = await this.carService.Save(this.model)
    if (result.success)
    {
      this.router.navigateByUrl('/cars')
    }
  }
  
  Return() {
    this.router.navigateByUrl('/cars')
  }

}
