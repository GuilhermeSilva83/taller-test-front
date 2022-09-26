import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { OperationResult } from '../models';
import { ServiceBase } from './CrudService';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase {

  constructor(http: HttpClient) {
    super(http, "api/user");
  }

  public async GuessPrice(modelId : number, price : number): Promise<OperationResult<any>> {
    let obj = {
      modelId : modelId,
      price : price
    }
    return await lastValueFrom(this.http.post<OperationResult<any>>(this.url + "/guess-price", obj));
  }


}
