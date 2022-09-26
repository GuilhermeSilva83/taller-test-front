import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  displaySuccess(message : string, title : string){
    this.toastr.success(message, title)
  }

  displayError(message : string, title : string){
      this.toastr.error(message, title)
  }

  displayInfo(message : string, title : string){
      this.toastr.info(message, title)
  }

  displayWarning(message : string, title : string){
      this.toastr.warning(message, title)
  }
  
}
