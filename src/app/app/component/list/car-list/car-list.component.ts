import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Make } from 'src/app/app/models';
import { CarService } from 'src/app/app/service/car.service';
import { MakeService } from 'src/app/app/service/make.service';
import { UserService } from 'src/app/app/service/user.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {


  columns = ['id', 'name', 'color', 'doors', 'make', 'year', 'actions'];
  list : Car[] = [];

  constructor(private carService : CarService, private makeService : MakeService, private userService : UserService,  private route: ActivatedRoute,   private router: Router) { }

  makeList : Make[] = [];
  
  makeId = 0;

  async ngOnInit(): Promise<void> {
    this.makeList = await this.makeService.List();
    this.Make_SelectionChange();
  }

  Detail(car : Car){
//    this.router.navigate(['/cars/', { id: car.id }]);
      this.router.navigateByUrl('/cars/' + car.id.toString());
  }
  async Make_SelectionChange()
  {
      this.list = await this.carService.ListByMakeId(this.makeId);
  }

}
