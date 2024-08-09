import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikedpropertiesService {

  constructor() { }
  searchdata:any[]=[]
// receiving from landing page search from
  addsearchdata(info:any){
    this.searchdata.push(info)
    
  }
  
  // sending to likeedproperty component
  sendtosearch(){
    return this.searchdata
  
}
}
