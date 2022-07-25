import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom, Observable } from 'rxjs';
import { IEntity, OperationResult } from '../models'

export class CrudService<TEntity extends IEntity> {

    url: string;
    constructor(protected http: HttpClient, protected path: string) {
        this.url = environment.apiUrl + "/" + this.path;
    }

    protected GetPath(append: string): string {
        return this.url =  environment.apiUrl + "/" + this.path + "/" + append;
    }

    public async Save(e: TEntity): Promise<OperationResult<TEntity>> {
        if (e.id) {
            return await lastValueFrom(this.http.put<OperationResult<TEntity>>(this.url + "/" + e.id.toString(), e));
        }
        else {
            return await lastValueFrom(this.http.post<OperationResult<TEntity>>(this.url, e));
        }
    }

    public async DeleteById(id : number): Promise<OperationResult<any>> {
        return await lastValueFrom(this.http.delete<OperationResult<any>>(this.url + "/" + id.toString()));
    }


    public async GetById(id : number): Promise<TEntity> {
        return await lastValueFrom(this.http.get<TEntity>(this.url + "/" + id.toString()));
    }

    public async List(): Promise<TEntity[]> {
        return await lastValueFrom(this.http.get<TEntity[]>(this.url));
    }

}
