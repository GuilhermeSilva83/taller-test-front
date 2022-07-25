import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Car } from '../models';
import { CrudService } from './CrudService';

@Injectable({
  providedIn: 'root'
})


export class CarService extends CrudService<Car>{
  constructor(protected override http: HttpClient) {
    super(http, "api/car");
  }


  public async ListByMakeId(makeId: number = 0): Promise<Car[]> {
    let url = this.GetPath("list-by-makeId/" + makeId.toString());
    return await lastValueFrom(this.http.get<Car[]>(url));
  }
  
} 