import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Make } from '../models';
import { CrudService } from './CrudService';

@Injectable({
  providedIn: 'root'
})
export class MakeService extends CrudService<Make>{
  constructor(protected override http: HttpClient) {
    super(http, "api/make");
  }
}