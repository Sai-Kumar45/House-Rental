import { Injectable } from '@angular/core';
import { property } from './propeties';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MypropertiesService {

  constructor() { }
  myproperties:property[]=[]

  addproperty(p:any){
    this.myproperties.push(p)
  }

  getmyperoperties(){
    return this.myproperties
  }
}
